import { persisted } from 'svelte-local-storage-store';

export const headerLink = persisted('current', 'home');
