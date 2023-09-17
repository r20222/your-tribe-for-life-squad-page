<script>
	import { PrismicImage } from '@prismicio/svelte'
	export let slice;

	let activeIndex = -1; // Initialize as -1 to indicate no active item

  function handleClick(index) {
    activeIndex = index;
  }

  function handleKeyPress(event, index) {
    if (event.key === 'Enter') {
      activeIndex = index;
    }
  }
</script>

{#each slice.items as item, index}
<div  class={`game ${index === activeIndex ? 'active' : ''}`} on:click={() => handleClick(index)} on:keydown={(event) => handleKeyPress(event, index)} tabindex="0" >	
		<span>{item.member.data.name}</span>
	</div>
{/each}

{#if activeIndex !== -1}
  <div class="active-item">
    <p>{slice.items[activeIndex].member.data.name}</p>
  </div>
{/if}



<style>
	
	.game {
		background: linear-gradient(60deg, rgba(16,25,37,1) 0%, rgb(0,0,1) 50%, rgba(16,25,37,1) 100%);
		width: 100px;
		height: 100px;
		overflow: hidden;
		border-radius: 20%;
		margin-right: 15px;
		cursor: pointer;
		color: white;
		border: 2px solid #576170;
	}

	.active {
		overflow: visible;
		width: 150px;
		height: 150px;
		position: relative;
		border: 2px solid #576170;
	}

	/* .active span {
		position: absolute;
		color: white;
		font-size: 1.6em;
		font-weight: 100;
		bottom: 10px;
		right: -160px;
	} */

	.active-item {
		color: white;
	}

</style>