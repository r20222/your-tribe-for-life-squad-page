<script>
	import Header from '$lib/components/Headerhome.svelte';
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	export let data;

	console.log(data.slices[0].items[0].squad_b.data);
</script>

<Header />

<section class="squad">
	<div class="members">
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
	</div>
</section>

<style>
 :global(*) {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
 }

 .squad {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
 }

 .members {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	margin-top: 5em;
	margin-bottom: 5em;
 }

 article {
	display: flex;
	flex-direction: column;
	width: auto;
 }

 h1 {
	color: whitesmoke;
	font-size: 1em;
	padding-top: 1em;
 }

 a {
	text-decoration: none;
	margin-left: 6em;
	margin-right: 6em;
	margin-top: 2em;
 }

 @media screen and (max-width: 1500px) {
        .members {
			grid-template-columns: repeat(3, 1fr);
    }
	a {
		margin-left: 4em;
		margin-right: 4em;
	}
}

@media screen and (max-width: 900px) {
        .members {
			grid-template-columns: repeat(2, 1fr);
			margin-top: 1em;
    }
	a {
		margin-left: 1.5em;
		margin-right: 1.5em;
	}
}

@media screen and (max-width: 500px) {
        .members {
			grid-template-columns: repeat(1, 1fr);
    }
	a {
		margin-left: 0em;
		margin-right: 0em;
	}
}

</style>
