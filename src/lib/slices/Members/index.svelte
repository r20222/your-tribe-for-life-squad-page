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
	  <span>Hello there</span>
	  <h3>{slice.items[activeIndex].member.data.name}</h3>
	  <p>General Kenobi</p>
	</div>
  {/if}
</section>



<style>

	:global(*) {
		box-sizing: border-box;
	}

	.game-nav {
        display: flex;
		/* margin-bottom: 250px; */
		overflow: hidden;
    }
	
	.game {
		background: linear-gradient(60deg, rgba(16,25,37,1) 0%, rgb(0,0,1) 50%, rgba(16,25,37,1) 100%);
		width: 100px;
		height: 100px;
		min-width: 100px;
		min-height: 100px;
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
		min-width: 150px;
		min-height: 150px;
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

	.info {
		width: 50%;
		margin-bottom: 3rem;
	}

	.info .subtitle {
		font-weight: 300;
		font-size: 1.2rem;
		color: white;
	}

	.info h3 {
		font-size: 3rem;
		font-weight: 300;
		color: white;
	}

	.info p {
		font-size: 2rem;
		font-weight: 300;
		color: #8f97aa;
	}

	@media screen and (max-width: 765px) {
        .game-nav {
            overflow: scroll;
    }
	.active span {
		display: none;
	}

    }

</style>