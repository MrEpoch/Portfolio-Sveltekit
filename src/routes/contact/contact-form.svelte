<script lang="ts">
	import * as Form from 'lib/components/ui/form';
	import { Input } from 'lib/components/ui/input';
	import { Checkbox } from 'lib/components/ui/checkbox';
	import { formSchema, type FormSchema } from './schema';
	import { Textarea } from 'lib/components/ui/textarea';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { PUBLIC_HCAPTCHA_SITEKEY } from '$env/static/public';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
    dataType: 'json',
		onSubmit: async ({ cancel, formData, jsonData }) => {
      const widgetId = await hcaptcha.render("hcaptcha-container", {
        sitekey: PUBLIC_HCAPTCHA_SITEKEY,
        theme: 'dark',
        size: 'invisible',
      });
      const success_code = await hcaptcha.execute(widgetId, { async: true });

      const customFormData = Object.fromEntries(formData)
      customFormData['h-captcha-response'] = success_code.response;
      jsonData(customFormData);
		},
		validators: zodClient(formSchema)
	});

	const onHCaptchaChange = (token: string) => {
		console.log(form);
	};

	const { form: formData, enhance } = form;
</script>

<svelte:head>
	<script src="https://js.hcaptcha.com/1/api.js" async defer></script>
</svelte:head>

<form
	class="flex w-full max-w-lg flex-col gap-8 rounded-md bg-main-background-300 p-10 text-white"
	method="POST"
	use:enhance
>
	<Form.Field {form} name="name">
		<Form.Control let:attrs>
			<Form.Label>Name</Form.Label>
			<Input class="bg-main-background-100" {...attrs} bind:value={$formData.name} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="email">
		<Form.Control let:attrs>
			<Form.Label>Email</Form.Label>
			<Input type="email" class="bg-main-background-100" {...attrs} bind:value={$formData.email} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="message">
		<Form.Control let:attrs>
			<Form.Label>Message</Form.Label>
			<Textarea class="bg-main-background-100" bind:value={$formData.message} {...attrs} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="privacyPolicy">
		<Form.Control let:attrs>
			<div class="flex items-center justify-start gap-4">
				<Form.Label>
          Agree with
					<a class="underline hover:text-yellow-300" href="https://www.privacypolicies.com/live/2470fb14-022a-4f19-a2e0-2893fa1693fd">
						Privacy Policy</a
					></Form.Label
				>
        <Checkbox {...attrs} bind:checked={$formData.privacyPolicy} />
			</div>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="privacyPolicy">
		<Form.Control let:attrs>
			<div class="text-sm items-center justify-start gap-4">
        This site is protected by <a class="underline hover:text-yellow-300" href="https://www.hCaptcha.com">hCaptcha</a> and its
<a class="underline hover:text-yellow-300" href="https://www.hcaptcha.com/privacy">Privacy Policy</a> and
<a class="underline hover:text-yellow-300" href="https://www.hcaptcha.com/terms">Terms of Service</a> apply.
			</div>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Button class="w-full bg-main-200 hover:bg-main-300">Send message</Form.Button>
		<div
			id="hcaptcha-container"
		></div>
</form>
