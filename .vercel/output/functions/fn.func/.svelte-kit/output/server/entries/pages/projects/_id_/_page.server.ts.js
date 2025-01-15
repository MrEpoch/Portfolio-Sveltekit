import { r as redirect } from '../../../../chunks/index.js';
const Lyfier = '/_app/immutable/assets/lyfier.DeWbJJ9T.png';
const Skapec = '/_app/immutable/assets/skapec.Bbxj0OEH.webp';
const Designer = '/_app/immutable/assets/designer.B15NoOr0.webp';
const projects = [
	{
		id: '59b06467d1ca17ac69d3d8f7e9a3e59d',
		name: 'Lyfier',
		link: 'https://company-information-v5d7.vercel.app/',
		img: Lyfier,
		technologies: 'Next.js, React, Tailwind, Vercel, Sanity, Typescript',
		created: '2023',
		githubUrl: 'https://github.com/MrEpoch/Company-Information',
		description: `Website which could be used for company centered around ecology, i used sanity for blogs and accomplished
        tasks, it showcases my skills in using Next.js and React itself.`
	},
	{
		id: '0258ce721406c4bf367af006d1e1f6ab',
		name: 'Designer portfolio',
		link: 'https://designer-portfolio-rust.vercel.app/',
		img: Designer,
		technologies: 'Next.js, React, Tailwind, Vercel, Typescript, ShadcnUI, framer motion',
		created: '2024',
		githubUrl: 'https://github.com/MrEpoch/designer-portfolio',
		description:
			'Designer portfolio made with intent of storing photos, designs and more, it was created with some beautiful animations in framer motion.'
	},
	{
		id: '0c5647ae44de7daeb992887c42e9d129',
		name: 'Skapec company',
		link: 'https://construction-skapec.vercel.app/',
		img: Skapec,
		technologies: 'Next.js, React, Tailwind, Vercel, Typescript, ShadcnUI, framer motion',
		created: '2024',
		githubUrl: 'https://github.com/MrEpoch/construction-skapec',
		description:
			'Construction company with basic pages like services, career, contact and about us, made with nextjs and optimized for performance.'
	}
];
const prerender = false;
const load = async ({ params }) => {
	const project = projects.find((project2) => project2.id === params.id);
	if (!project) {
		redirect(302, '/projects');
	}
	return {
		project
	};
};
export { load, prerender };
