import { createClient } from '$lib/prismicio';

export async function load({ params }) {
  const { slug } = params; // Haal de slug op uit de URL

  const client = createClient(); // Pas eventueel de clientconfiguratie aan zoals nodig

  // Haal de gegevens van de specifieke "member" op basis van de slug
  const document = await client.getByUID('member', slug);

  if (!document) {
    // Als er geen overeenkomende "member" is gevonden, kun je een foutafhandeling doen
    return {
      status: 404,
      error: 'Member not found',
    };
  }

  return document.data
}