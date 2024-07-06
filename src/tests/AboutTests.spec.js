import AboutMe from '../components/AboutMe.svelte';
import AboutTimeline from '../components/AboutTimeline.svelte';
import { render, screen, fireEvent } from '@testing-library/svelte';
import { expect, describe, test } from 'vitest';

// AboutMe.svelte test, checking for greeting header content

describe('Renders about me component', () => {
	test('Shows content', () => {
		render(AboutMe);
		expect(screen.getByText('Hi, i am Alex')).toBeInTheDocument();
	});
});

// AboutTimeline.svelte test, checking for date of certain post

describe('Renders about timeline component', () => {
	test('Shows content', () => {
		render(AboutTimeline);
		expect(screen.getByText('Released on 2023 Nov 9')).toBeInTheDocument();
	});
});
