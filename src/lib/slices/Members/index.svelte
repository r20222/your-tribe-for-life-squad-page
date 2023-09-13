<script>
	import { PrismicImage } from '@prismicio/svelte'
	export let slice;
</script>

{#each slice.items as item}
	<h2>{item.member.data.name}</h2>
	<p></p>
{/each}