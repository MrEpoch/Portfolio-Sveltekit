import { redirect } from '@sveltejs/kit';
import projects from 'lib/texts/projects_content';

export const prerender = false;

export const load = async ({ params }: { params: { id: string } }) => {
	const project = projects.find((project) => project.id === params.id);
	if (!project) {
		redirect(302, '/projects');
	}

	return {
		project
	};
};
