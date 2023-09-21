<script>
  // Importeren van benodigde modules
  import { PrismicImage } from '@prismicio/svelte'
  import { SliceZone } from '@prismicio/svelte'
  import { components } from '$lib/slices'
  
  // Exporteren van de 'data' variabele
  export let data
</script>

<!-- HTML-sectie -->
<div>
  <!-- Golf-elementen -->
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
</div>

<!-- Uitgecommentarieerde sectie -->
<!--
<div class="person">
  <div style="background-image: url('');" class="circle"></div>
  <h1>{data.name}</h1>
</div>
-->

<!-- Renderen van slices met behulp van SliceZone -->
<SliceZone slices={data.slices} {components} />

<!-- Stijlsectie -->
<style> 

  /* Stijl voor het hoofdelement van de pagina */
  main {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  background: linear-gradient(-45deg, #000000, #1b1b1b, #1b1b1b, #212121);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
 /* Definitie van de achtergrondanimatie met behulp van keyframes */
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>

