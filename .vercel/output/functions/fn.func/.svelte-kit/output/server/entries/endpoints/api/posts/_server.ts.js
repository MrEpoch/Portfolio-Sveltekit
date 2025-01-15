import 'clsx';
import {
	S as fallback,
	T as attr,
	V as clsx,
	W as slot,
	X as bind_props
} from '../../../../chunks/index3.js';
import { j as json } from '../../../../chunks/index.js';
const metadata$1 = {
	title: 'Fullstack project built with NextJS, Rust, and Docker',
	description:
		'Fullstack project built with NextJS for website rendering, Rust for backend api, database used is postgres, docker for managing db and project as whole',
	date: '2024-2-5',
	categories: ['NextJS', 'Project', 'Rust', 'Docker'],
	published: false
};
function NextJS_Rust_Docker_mdx($$payload) {}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(
	/* @__PURE__ */ Object.defineProperty(
		{
			__proto__: null,
			default: NextJS_Rust_Docker_mdx,
			metadata: metadata$1
		},
		Symbol.toStringTag,
		{ value: 'Module' }
	)
);
function Link_md($$payload, $$props) {
	let href = $$props['href'];
	let color = fallback($$props['color'], 0);
	$$payload.out += `<a${attr('class', clsx(color === 0 ? 'text-blue-500' : 'bg-gradient-to-r from-indigo-400 to-cyan-400 box-decoration-clone bg-clip-text text-transparent'))}${attr('href', href)}><!---->`;
	slot($$payload, $$props, 'default', {}, null);
	$$payload.out += `<!----></a>`;
	bind_props($$props, { href, color });
}
const MyWorkspace = '/_app/immutable/assets/myworkspace.woG3AntR.png';
function ImageStyled($$payload, $$props) {
	let src = $$props['src'];
	$$payload.out += `<img${attr('src', src)} alt="Alexandr Stenčuk" class="w-full object-cover">`;
	bind_props($$props, { src });
}
const metadata = {
	title: 'Welcome To My Portfolio',
	description: 'Some Info about this portfolio.',
	date: '2023-9-18',
	categories: ['sveltekit', 'portfolio', 'me'],
	published: true
};
function Welcome_portfolio_mdx($$payload) {
	$$payload.out += `<h1>Hello, Nice to see you 👋</h1> <p>My name is `;
	Link_md($$payload, {
		href: '/',
		children: ($$payload2) => {
			$$payload2.out += `<!---->Alexandr Stenčuk`;
		},
		$$slots: { default: true }
	});
	$$payload.out += `<!---->, I am a web developer mostly centered around front-end development.
I excel in the React library and its meta framework Next.js, my favorite web framework is Sveltekit,
which I use for most of my projects.</p> <p>Before I already made a few portfolios, but one way or another they were awful,
so I decided to make the final version of it. That’s it,
this portfolio is built with SvelteKit and is simply awesome. It took me a few days to make it,
I had an idea about using svelte parallax, but it was not it.</p> <p>I think parallax is a very unique design on websites, but it breaks very often and has the problem of being
badly responsive on small devices. Responsive design is one of the main themes of current web building which
is a must to have on a website. Most users always come from phones or similarly
smaller devices which makes it harder to scale to their sizes for me as a developer.</p> `;
	ImageStyled($$payload, { src: MyWorkspace });
	$$payload.out += `<!----> <p>Styling was done through Tailwindcss which is for me most important technology for this project. When
I will later return a few months later, I will not have to see class names that look like foreign languages.
I had a few projects that I could not upgrade cause learning what each class means, would take me a tremendous amount of time.</p> <p>It contains a service worker for caching the website on the client side, which is pretty cool.
Performance is one of the main points why I use SvelteKit, but one thing I
do that brings the whole performance down is loading images, I usually add loading
animation when an image is not totally loaded to prevent it from suddenly jumping in.</p> <p>I used typescript, but I use it mainly for type-checking fatal errors, many times I find it pretty
annoying even though many stand with it. Now many popular projects and developers are ditching
typescript due to various reasons.</p> <p>Code for my portfolio i wrote in Neovim, which for me best code/text editor I
could wish for. Many things I need to do in fact need a terminal to use, which is pretty easy
to use with Neovim. However, I use tmux and lspsage to make it very easy to use the terminal through keybindings.</p>`;
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(
	/* @__PURE__ */ Object.defineProperty(
		{
			__proto__: null,
			default: Welcome_portfolio_mdx,
			metadata
		},
		Symbol.toStringTag,
		{ value: 'Module' }
	)
);
async function getPosts() {
	let posts = [];
	const paths = /* @__PURE__ */ Object.assign({
		'/src/posts/NextJS_Rust_Docker.mdx': __vite_glob_0_0,
		'/src/posts/welcome-portfolio.mdx': __vite_glob_0_1
	});
	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.mdx', '');
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata2 = file.metadata;
			const post = { ...metadata2, slug };
			post.published && posts.push(post);
		}
	}
	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);
	return posts;
}
async function GET() {
	const posts = await getPosts();
	return json(posts);
}
export { GET };
