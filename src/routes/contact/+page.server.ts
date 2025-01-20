import type { Actions, PageServerLoad } from './$types.js';
import { superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
import { HCAPTCHA_SECRET, WEB3_FORMS_KEY } from '$env/static/private';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		try {
			const form = await superValidate(event, zod(formSchema));
			if (!form.valid) {
				return fail(400, { form });
			}

			const hcaptchaResponse = await fetch(
				`https://api.hcaptcha.com/siteverify?secret=${HCAPTCHA_SECRET}&response=${form.data['h-captcha-response']}&remoteip=${event.getClientAddress()}`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json'
					}
				}
			);

			const hcaptchaData = await hcaptchaResponse.json();

			if (!hcaptchaData.success) {
				console.log('fail hcaptcha', hcaptchaData);
				return fail(400, { error: 'hcaptcha-fail' });
			}

			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({
					access_key: WEB3_FORMS_KEY,
					name: form.data.name,
					email: form.data.email,
					message: form.data.message
				})
			});

			const dataRes = await response.json();

			if (dataRes.error) {
				console.log('fail web3forms');
				fail(500, { error: dataRes.error });
			}

			return {
				form
			};
		} catch (err) {
			console.log('fail', err);
			return fail(500, { error: err });
		}
	}
};
