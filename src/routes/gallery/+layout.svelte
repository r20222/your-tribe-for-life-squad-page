<main>
	<slot />
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Open+Sans:wght@300&display=swap');
	
	:global(html) {
		background-color: #1f1f1f;
		color: white;
		overflow-x: hidden;
		font-family: 'Open Sans';
		height: 100%;
	}
	:global(body) {
		margin: 0rem;
		padding: 0rem;
	}

	main {
		background: url('/bg-home.jpg');
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>
