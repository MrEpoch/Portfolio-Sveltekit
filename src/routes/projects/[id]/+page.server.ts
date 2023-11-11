import { redirect } from '@sveltejs/kit';
import projects from '../projects';

export const prerender = false;

export const load = async ({ params }: { params: { id: string } }) => {
	const project = projects.find((project) => project.id === params.id);
	if (!project) {
		throw redirect(302, '/projects');
	}

	return {
		project
	};
};
