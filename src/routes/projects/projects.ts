import TomatoDream from "assets/tomatodream.png";
import VelvetLine from "assets/velvet-line.png";

// require("crypto").randomBytes(16).toString("hex");

const projects = [
    {
        id: "1763c8a7c642ac80405a5736de4f5383",
        name: "Tomato Dream",
        link: "https://www.tomatodream.store",
        img: TomatoDream,
        technologies: "SvelteKit, Tailwind, Vercel, Typescript, Firebase, Lucia-auth, Prisma, Redis, Stripe Api",
        created: "2023",
        description: `It is shopping website featuring selling of tomatoes, it is fully responsive website with auth and payment system. 
        Only thing which bothers me on project is that i could not get free smtp email server to send email for auth verification. Because
        of that reason i had to migrate from email to username auth. That reason and the fact that OAuth doesn't return email addresses,
        but usernames.`,
    },
    {
        id: "69870b0d54e9ca579df69d93ec87ccbe",
        name: "Velvet Line",
        link: "https://clothes-shop-ten.vercel.app/",
        img: VelvetLine,
        technologies: "SvelteKit, Tailwind, Vercel, Typescript, Supabase, Prisma, Redis, Stripe Api",
        created: "2023",
        description: `Shopping website for selling clothes, it contains email auth, payment integrated with stripe,
        cached database with redis, for database i used for this time supabase and for storing images
        supabase storage, admin can create new projects through admin producted pages instead of modal which i used
        on Tomato Dream website`,
    }
];

export default projects;
