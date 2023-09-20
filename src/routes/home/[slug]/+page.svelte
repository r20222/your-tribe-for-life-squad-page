<script>
	import { page } from '$app/stores' ;
    import Header from '$lib/components/Headerhome.svelte'
    export let data
</script>

<Header />

<!-- <pre>
	{JSON.stringify(data, null, 2)}
</pre> -->

<div class="container">
    <section class="game-nav">
        <a href="/home">
            <div class="game">
                <i class="fa fa-location-arrow"></i>
            </div>
        </a>
        <a href="/home/roelie">
            <div style="background-image: url('');" class:active={$page.url.pathname === '/home/roelie'} class="game">
				<span>
					{data.name}
				</span>
			</div>
		</a>
        <a href="/home/rick">
            <div style="background-image: url('');" class:active={$page.url.pathname === '/home/rick'} class="game">
				<span>
					{data.name}
				</span>
			</div>
		</a>
        <a href="/home/nazneen">
            <div style="background-image: url('');" class:active={$page.url.pathname === '/home/nazneen'} class="game">
				<span>
					{data.name}
				</span>
			</div>
		</a>
        <a href="/home/zenit">
            <div style="background-image: url('');" class:active={$page.url.pathname === '/home/zenit'} class="game">
				<span>
					{data.name}
				</span>
			</div>
		</a>
        <a href="/home/daan">
            <div style="background-image: url('');" class:active={$page.url.pathname === '/home/daan'} class="game">
				<span>
					{data.name}
				</span>
			</div>
		</a>
        <a href="/home/amber">
            <div style="background-image: url('');" class:active={$page.url.pathname === '/home/amber'} class="game">
				<span>
					{data.name}
				</span>
			</div>
        </a>
    </section>
    
    <section class="info">
        <div class="active-item">
          <span>Hello there</span>
          <h3>{data.name}</h3>
          <p>General Kenobi</p>
        </div>
    </section>
</div>

<style>
    
    :global(*) {
		box-sizing: border-box;
	}

    .container {
		max-width: 90%;
		margin: 0 auto;
        height: calc(100vh - 135px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
	}

	.game-nav {
        display: flex;
		overflow: hidden;
    }

    a {
        text-decoration: none;
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
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border: 2px solid #576170;
        display: flex;
        align-items: center;
        justify-content: center;
	}

    .game i {
        text-decoration: none;
        font-size: 2rem;
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
		bottom: 5px;
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

	/* Profiel foto's */

	.game-nav a:nth-child(2).game{
		background: red !important;
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

