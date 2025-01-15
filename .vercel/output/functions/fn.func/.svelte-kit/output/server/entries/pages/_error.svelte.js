import {
	a0 as getContext,
	T as attr,
	a1 as escape_html,
	Z as store_get,
	_ as unsubscribe_stores,
	Q as pop,
	O as push
} from '../../chunks/index3.js';
import { u as updated, s as stores } from '../../chunks/client.js';
({
	get current() {
		return updated.current;
	},
	check: stores.updated.check
});
function context() {
	return getContext('__request__');
}
const page$1 = {
	get data() {
		return context().page.data;
	},
	get error() {
		return context().page.error;
	},
	get form() {
		return context().page.form;
	},
	get params() {
		return context().page.params;
	},
	get route() {
		return context().page.route;
	},
	get state() {
		return context().page.state;
	},
	get status() {
		return context().page.status;
	},
	get url() {
		return context().page.url;
	}
};
const page = page$1;
const notfound = '/_app/immutable/assets/notfound.CSh8tmpH.svg';
function _error($$payload, $$props) {
	push();
	var $$store_subs;
	$$payload.out += `<div class="flex min-h-screen flex-col items-center justify-center dark:bg-black/10 dark:text-white/90"><img${attr('src', notfound)} width="300" alt="not found"> <div class="flex h-fit max-w-[400px] flex-col items-center justify-center rounded-xl p-12"><h1 class="flex flex-col items-center gap-[1rem] text-center text-3xl font-bold text-gray-900 dark:text-white"><span class="line h-1 w-full bg-gradient-to-r from-indigo-400 to-cyan-400"></span> ${escape_html(store_get(($$store_subs ??= {}), '$page', page).error?.message)}</h1></div></div>`;
	if ($$store_subs) unsubscribe_stores($$store_subs);
	pop();
}
export { _error as default };
