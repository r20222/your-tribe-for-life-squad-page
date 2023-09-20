import { createClient } from '$lib/prismicio';

export async function load({ fetch, request }) {
	const client = createClient({ fetch, request });

	const document = await client.getByUID('squad_b', 'squad_b', {
		fetchLinks: ['member.name', 'member.about', 'member.picture', 'member.card']
	});

	return document.data;
}
