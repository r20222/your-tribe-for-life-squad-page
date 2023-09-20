<script>
	import Header from '$lib/components/Headerhome.svelte';
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	export let data;

	console.log(data.slices[0].items[0].squad_b.data);
</script>

<Header />

<!-- <section class="squad">
	{#each data.slices[0].items as item}
		<article class="profile">
			<img
				src={item.squad_b.data.picture.url}
				alt="Profile picture of Squad B"
				width="100"
				height="100"
			/>

			<h1 class="name">{item.squad_b.data.name}</h1>
		</article>
	{/each}
</section> -->

<section class="squad">
	{#each data.slices[0].items as item}
		<a href="/gallery/{item.squad_b.uid}">
			<article class="profile">
				{#if item.squad_b.data.picture}
					<img
						src={item.squad_b.data.picture.url}
						alt="Profile picture of Squad B"
						width="100"
						height="100"
					/>
				{/if}

				<h1 class="name">{item.squad_b.data.name}</h1>
			</article>
		</a>
	{/each}
</section>

<!-- <div>
	<pre>{JSON.stringify(data, null, 2)}</pre>
</div> -->

<!-- <style>
	.name {
		color: blueviolet;
		font-size: 3em;
	}
</style> -->
