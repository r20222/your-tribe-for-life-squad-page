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

<style>
  main {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    background: linear-gradient(315deg, rgb(3, 5, 53) 3%, rgb(1, 32, 64) 38%, rgb(16, 13, 39) 68%, rgb(5, 10, 51) 98%);
    font-family: 'Open Sans';
  }
  @keyframes gradient {
      3% {
          background-position: 0% 0%;
      }
      50% {
          background-position: 100% 100%;
      }
      100% {
          background-position: 0% 0%;
      }
  }
  

  
  </style>
