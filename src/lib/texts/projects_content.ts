import TomatoDream from 'assets/tomatodream.png';
import Lyfier from 'assets/lyfier.png';
import InfinityImg from 'assets/infinity.png';

import InfinityDark from 'assets/infinity-dark.png';
import TomatoDreamDark from 'assets/tomatodream-darkmode.png';
import LyfierDark from 'assets/lyfier-darkmode.png';
import Lexagos from 'assets/lexagos.png';

// require("crypto").randomBytes(16).toString("hex");

const projects = [
/*	{
		id: '1763c8a7c642ac80405a5736de4f5383',
		name: 'Tomato Dream',
		link: 'https://www.tomatodream.store',
		img: {
			light: TomatoDream,
			dark: TomatoDreamDark
		},
		technologies:
			'SvelteKit, Tailwind, Vercel, Typescript, Firebase, Lucia-auth, Prisma, Redis, Stripe Api',
		created: '2023',
		githubUrl: 'https://github.com/MrEpoch/Tomato-shop',
		description: `It is shopping website featuring selling of tomatoes, it is fully responsive website with auth and payment system. 
        Only thing which bothers me on project is that i could not get free smtp email server to send email for auth verification. Because
        of that reason i had to migrate from email to username auth. That reason and the fact that OAuth doesn't return email addresses,
        but usernames.`
	},
  */
	{
		id: '59b06467d1ca17ac69d3d8f7e9a3e59d',
		name: 'Lyfier',
		link: 'https://company-information-v5d7.vercel.app/',
		img: {
			light: Lyfier,
			dark: LyfierDark
		},
		technologies: 'Next.js, React, Tailwind, Vercel, Sanity, Typescript',
		created: '2023',
		githubUrl: 'https://github.com/MrEpoch/Company-Information',
		description: `Website which could be used for company centered around ecology, i used sanity for blogs and accomplished
        tasks, it showcases my skills in using Next.js and React itself.`
	},
  /*
	{
		id: '0b8c730a270f2f01503018cbe6c24212',
		name: 'InfinitySights VR',
		link: 'https://infinitysights.vercel.app/',
		img: {
			light: InfinityImg,
			dark: InfinityDark
		},
		technologies: 'Sveltekit, Tailwind, Vercel, Typescript',
		created: '2023',
		githubUrl: 'https://github.com/MrEpoch/Practice-Project',
		description: `Practice site created with sveltekit, it looks pretty cool`
	},
  */
	{
		id: 'e29ac0f6c9b13de4ebb29d743aa8b2b3',
		name: 'Lexagos',
		link: 'https://lexagos.vercel.app/',
		img: {
			light: Lexagos,
			dark: Lexagos
		},
		technologies:
			'NextJS, Docker, Tailwind, Vercel, Typescript, Prisma, Redis, Postgres, Heroku(DB hosting)',
		created: '2024',
		githubUrl: 'https://github.com/MrEpoch/lexagos',
		description: `School project, course site, i tried in depth to use nextjs, it has basic features like login/signup, course add/update/delete, redis ip blocking and docker compose for running project with db in local env`
	}
];

export default projects;
