import TomatoDream from 'assets/tomatodream.png';
import VelvetLine from 'assets/velvetLine.png';
import Lyfier from 'assets/lyfier.png';
import EchoesOfLiterature from 'assets/echoes.png';
import InfinityImg from "assets/infinity.png";

import InfinityDark from "assets/infinity-dark.png";
import TomatoDreamDark from "assets/tomatodream-darkmode.png";
import VelvetLineDark from "assets/velvetLine-darkmode.png";
import LyfierDark from "assets/lyfier-darkmode.png";
import EchoesOfLiteratureDark from "assets/echoes-darkmode.png";
import Lexagos from "assets/lexagos.png";

// require("crypto").randomBytes(16).toString("hex");

const projects = [
	{
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
		description: `It is shopping website featuring selling of tomatoes, it is fully responsive website with auth and payment system. 
        Only thing which bothers me on project is that i could not get free smtp email server to send email for auth verification. Because
        of that reason i had to migrate from email to username auth. That reason and the fact that OAuth doesn't return email addresses,
        but usernames.`
	},
	{
		id: '69870b0d54e9ca579df69d93ec87ccbe',
		name: 'Velvet Line',
		link: 'https://clothes-shop-ten.vercel.app/',
    img: {
      light: VelvetLine,
      dark: VelvetLineDark
    },
		technologies: 'SvelteKit, Tailwind, Vercel, Typescript, Supabase, Prisma, Redis, Stripe Api',
		created: '2023',
		description: `Shopping website for selling clothes, it contains email auth, payment integrated with stripe,
        cached database with redis, for database i used for this time supabase and for storing images
        supabase storage, admin can create new projects through admin producted pages instead of modal which i used
        on Tomato Dream website`
	},
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
		description: `Website which could be used for company centered around ecology, i used sanity for blogs and accomplished
        tasks, it showcases my skills in using Next.js and React itself.`
	},
	{
		id: 'b6f8c3e8c5a9a0a9a9a9a9a9a9a9a9a9',
		name: 'Echoes Of Literature',
    link: 'https://book-store-mrepoch.vercel.app',
    img: {
      light: EchoesOfLiterature,
      dark: EchoesOfLiteratureDark
    },
		technologies: 'Next.js React, Tailwind, Vercel, Prisma, Stripe Api, Supabase, Typescript',
		created: '2023',
		description: `Book store website, full stack project, auth handled through supabase, payment with stripe, database
        managed through supabase, built with next.js and tailwind.`
  },
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
		description: `Practice site created with sveltekit, it looks pretty cool`
  },
  {
    id: 'e29ac0f6c9b13de4ebb29d743aa8b2b3',
    name: 'Lexagos',
    link: 'https://lexagos.vercel.app/',
    img: {
      light: Lexagos,
      dark: Lexagos
    },
    technologies: 'NextJS, Docker, Tailwind, Vercel, Typescript, Prisma, Redis, Postgres, Heroku(DB hosting)',
    created: '2024',
    description: `School project, course site, i tried in depth to use nextjs, it has basic features like login/signup, course add/update/delete, redis ip blocking and docker compose for running project with db in local env`
  }
];

export default projects;
