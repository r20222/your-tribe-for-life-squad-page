<script>
	import * as prismic from '@prismicio/client';
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';

	export let data;

	// import Header from '$lib/components/Headerhome.svelte';
</script>

<SliceZone slices={data.slices} {components} />

<main>
	<style>
		body {
			background: url(/bg-home.jpg);
		}
	</style>
</main>
