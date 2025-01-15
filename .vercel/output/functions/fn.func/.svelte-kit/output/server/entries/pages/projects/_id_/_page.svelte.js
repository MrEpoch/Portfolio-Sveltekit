import {
	T as attr,
	a1 as escape_html,
	X as bind_props,
	Q as pop,
	O as push
} from '../../../../chunks/index3.js';
import '../../../../chunks/store.js';
function _page($$payload, $$props) {
	push();
	let data = $$props['data'];
	let project = data.project;
	$$payload.out += `<div class="max-w-container w-full py-16 text-white"><div class="flex h-full w-full flex-col gap-[2rem]"><a${attr('href', project.link)} class="flex h-full min-h-[200px] w-full justify-center rounded-3xl bg-gray-200 object-cover dark:bg-gray-800 sm:min-h-[500px]"><img class="rounded-3xl object-cover opacity-0 dark:brightness-[85%]"${attr('alt', project.name)} onload="this.__e=event" onerror="this.__e=event"></a> <a${attr('href', project.link)}><h2 class="font-anton mt-4 text-2xl tracking-wide text-gray-900 hover:underline dark:text-white sm:text-4xl">${escape_html(project.name)}</h2></a> <hr class="long-line h-1 w-full bg-gradient-to-r from-main-200 to-main-300"> <div class="w-full"><div class="flex justify-between gap-2"><h3 class="text-sm font-bold sm:text-lg">Technologies:</h3> <p class="text-sm sm:text-lg">${escape_html(project.technologies)}</p></div> <div class="flex justify-between gap-2"><h3 class="text-sm font-bold sm:text-lg">Created:</h3> <p class="text-sm sm:text-lg">${escape_html(project.created)}</p></div> <div class="flex justify-between gap-2"><h3 class="text-sm font-bold sm:text-lg">Github Url:</h3> <a${attr('href', project.githubUrl)} class="text-sm hover:underline sm:text-lg">${escape_html(project.name)}</a></div></div> <div class="w-full"><h3 class="font-anton mt-4 text-2xl tracking-wide text-gray-900 dark:text-white">Description</h3> <p class="mt-4 text-lg text-gray-900 dark:text-white">${escape_html(project.description)}</p></div></div></div>`;
	bind_props($$props, { data });
	pop();
}
export { _page as default };
