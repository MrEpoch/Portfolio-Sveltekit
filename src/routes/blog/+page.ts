import type { Post } from "../../types/blog";

export async function load({ fetch, url }) {
    const response = await fetch('api/posts');
    const tag = url.searchParams.get('tag');

    let posts: Post[] = await response.json();

    if (tag) {
        posts = posts.filter((post) => post.categories.includes(tag));
    }

    return { 
        posts
    }
}
