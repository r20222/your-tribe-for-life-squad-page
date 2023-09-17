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

<section class="game-nav">
	{#each slice.items as item, index}
	<div style="background-image: url('{item.member.data.picture.url}');"  class={`game ${index === activeIndex ? 'active' : ''}`} on:click={() => handleClick(index)} on:keydown={(event) => handleKeyPress(event, index)} tabindex="0" >	
			<span>{item.member.data.name}</span>
	</div>
	{/each}    
</section>

<section class="info">
	{#if activeIndex !== -1}
	<div class="active-item">
	  <p>{slice.items[activeIndex].member.data.name}</p>
	</div>
	<section>
	  <p>test</p>
	</section>
  {/if}
</section>



<style>

	.game-nav {
        display: flex;
        margin-bottom: 250px;
    }
	
	.game {
		background: linear-gradient(60deg, rgba(16,25,37,1) 0%, rgb(0,0,1) 50%, rgba(16,25,37,1) 100%);
		width: 100px;
		height: 100px;
		overflow: hidden;
		border-radius: 20%;
		margin-right: 15px;
		cursor: pointer;
		color: white;
		background: #343434 no-repeat center center / cover;
		border: 2px solid #576170;
	}

	.active {
		overflow: visible;
		width: 150px;
		height: 150px;
		position: relative;
		border: 2px solid #576170;
	}

	.game span {
		display: none;
	}

	.active span {
		display: block;
		position: absolute;
		color: white;
		font-size: 1.6em;
		font-weight: 100;
		bottom: 10px;
		left: 160px;
		white-space: nowrap;
	}

	.active-item {
		color: white;
	}

</style>