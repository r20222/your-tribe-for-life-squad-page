<script>
    import { PrismicImage } from '@prismicio/svelte'
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices'
    export let data
</script>


<div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
 </div>

 <!-- <div class="person">
    <div style="background-image: url('');" class="circle"></div>
    <h1>{data.name}</h1>
</div> -->

<SliceZone slices={data.slices} {components} />


