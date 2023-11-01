export type Categories = 'sveltekit' | 'svelte' | 'portfolio';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};
