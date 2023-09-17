import { json } from "@sveltejs/kit";
import type { Post } from "types/blog";

async function getPosts() {
    let posts: any[] = [];

    const paths = import.meta.glob('/src/posts/*.mdx', { eager: true });

    for (const path in paths) {
        const file = paths[path];
        const slug = path.split('/').at(-1)?.replace('.mdx', '');

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Post, 'slug'>;
            const post = { ...metadata, slug } satisfies Post;
            post.published && posts.push(post);
        }
    }

    posts = posts.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime());

    return posts;
}


export async function GET() {
    const posts = await getPosts();
    return json(posts);
}
