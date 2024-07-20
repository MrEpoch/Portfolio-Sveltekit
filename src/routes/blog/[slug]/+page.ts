import { error } from '@sveltejs/kit';

export async function load({ params }: { params: { slug: string } }) {
	try {
		const post = await import(`../../../posts/${params.slug}.mdx`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		error(404, 'Cound not find ${params.slug}');
	}
}
