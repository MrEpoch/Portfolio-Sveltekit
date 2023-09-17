import { persisted } from 'svelte-local-storage-store';

export const theme = persisted('theme', 'dark');
