<main>
	<slot />
</main>

<!-- Stijlsectie -->
<style> 
:global(*) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	/* Stijl voor het hoofdelement van de pagina */
	main {
	margin: auto;
    overflow: auto;
	background: linear-gradient(-45deg, #000000, #000450, rgb(3, 0, 41), #000450);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
    width: 100VW;
    height: 100VH;
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
  
  