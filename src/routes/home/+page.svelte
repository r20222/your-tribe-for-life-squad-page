<script>
    import Header from '$lib/components/Headerhome.svelte'
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices'
    export let data

</script>

<Header />

<div class="container">
    <section class="game-nav">
        <SliceZone slices={data.slices} {components}/>        
    </section>
</div>

<style>
    
     .container {
		max-width: 90%;
		margin: 0 auto;
	}

    .game-nav {
        display: flex;
        margin-bottom: 250px;
    }

</style>