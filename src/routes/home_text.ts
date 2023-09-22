import Feather from 'feather-icons';

export const paragraph_text = `
        Experienced in Next.js, SvelteKit, Express.js, and TailwindCSS. Crafting diverse projects, 
        from static sites to dynamic apps with auth, APIs, Stripe, and storage.
    `;

export const svg_content = [
    {
        id: 1,
        title: 'Responsive Design',
        content: 'Designed for optimal user experience on all devices.'
    },
    {
        id: 2,
        title: 'Project setup',
        content: 'Experience with variety of frameworks.'
    },
    {
        id: 3,
        title: 'Cached content',
        content: 'Highly optimized for performance. Database and frontend caching.'
    }
];

export const contact_info = [
    {
        type: 'email',
        svg: Feather.icons.mail.toSvg(),
        isLink: false,
        content: 'dev@stencukpage.com'
    },
    {
        type: 'github',
        svg: Feather.icons.github.toSvg(),
        isLink: true,
        content: 'https://github.com/MrEpoch/'
    },
    {
        type: 'instagram',
        svg: Feather.icons.instagram.toSvg(),
        isLink: true,
        content: 'instagram'
    }
];
