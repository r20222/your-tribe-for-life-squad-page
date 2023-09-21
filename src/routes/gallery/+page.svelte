<script>
	import Header from '$lib/components/Headerhome.svelte';
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	export let data;

	console.log(data.slices[0].items[0].squad_b.data);
</script>

<Header />

<section class="squad">
	{#each data.slices[0].items as item}
		<a href="/gallery/{item.squad_b.uid}">
			<article class="profile">
				{#if item.squad_b.data.picture}
					<img
						src={item.squad_b.data.picture.url}
						alt="Profile picture of Squad B"
						width="200"
						height="200"
					/>
				{/if}

				<h1 class="name">{item.squad_b.data.name}</h1>
			</article>
		</a>
	{/each}
</section>

<style>
	.squad {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		margin-left: 6em;
		margin-top: 5em;
		padding: 1em;
	}

	.name {
		color: whitesmoke;
		font-size: 1em;
		padding: 1em;
		margin-left: 1.5em;
	}
	a {
		text-decoration: none;
	}
</style>
