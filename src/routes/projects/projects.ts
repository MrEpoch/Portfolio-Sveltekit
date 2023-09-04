import TomatoDream from "assets/tomatodream.png";

const projects = [
    {
        id: "1763c8a7c642ac80405a5736de4f5383",
        name: "Tomato Dream",
        link: "https://www.tomatodream.store",
        img: TomatoDream,
        technologies: "SvelteKit, Tailwind, Vercel, Typescript Firebase, Lucia-auth, Prisma, Redis, Stripe Api",
        created: "2023",
        description: `It is shopping website featuring selling of tomatoes, it is fully responsive website with auth and payment system. 
        Only thing which bothers me on project is that i could not get free smtp email server to send email for auth verification. Because
        of that reason i had to migrate from email to username auth. That reason and the fact that OAuth doesn't return email addresses,
        but usernames.`,
    }
];

export default projects;
