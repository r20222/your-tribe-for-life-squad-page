<script>
	// Declaratie van geëxporteerde variabele 
	export let slice;
  </script>
  
  <!-- HTML-sectie -->
  <div>
	<!-- Golf-elementen -->
	<div class="wave"></div>
	<div class="wave"></div>
	<div class="wave"></div>
  </div>
  
  <!-- Iteratie over items in 'slice' -->
  {#each slice.items as item}
	<a href="/home">
	  <!-- Persoon-container -->
	  <div class="person">
		<!-- Profielfoto -->
		<div style="background-image: url('{item.member.data.picture.url}');" class="circle"></div>
		<!-- Naam van de persoon -->
		<h1>{item.member.data.name}</h1>
	  </div>
	</a>
  {/each}
  
  <!-- Stijlsectie -->
  <style>
	/* Stijl voor de geanimeerde golf-elementen */
	.wave {
	  background: rgb(255 255 255 / 25%);
	  border-radius: 1000% 1000% 0 0;
	  position: fixed;
	  width: 200%;
	  height: 12em;
	  animation: wave 10s -3s linear infinite;
	  transform: translate3d(0, 0, 0);
	  opacity: 0.8;
	  bottom: 0;
	  left: 0;
	}
  
	/* Stijl voor het tweede golf-element */
	.wave:nth-of-type(2) {
	  bottom: -1.25em;
	  animation: wave 18s linear reverse infinite;
	  opacity: 0.8;
	}
  
	/* Stijl voor het derde golf-element */
	.wave:nth-of-type(3) {
	  bottom: -2.5em;
	  animation: wave 20s -1s reverse infinite;
	  opacity: 0.9;
	}
  
	/* Keyframes voor de golfanimatie */
	@keyframes wave {
	  2% {
		transform: translateX(1);
	  }
	  25% {
		transform: translateX(-25%);
	  }
	  50% {
		transform: translateX(-50%);
	  }
	  75% {
		transform: translateX(-25%);
	  }
	  100% {
		transform: translateX(1);
	  }
	}
  
	/* Stijl voor de persoon-container */
	.person {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  width: fit-content;
	  aspect-ratio: auto;
	}
  
	/* Stijl voor de profielfoto */
	.circle {
	  background: rgba(255, 255, 255, 0.151);
	  height: 150px;
	  aspect-ratio: 1/1;
	  border-radius: 50%;
	  background-position: center;
	  background-size: cover;
	  margin: 20px;
	}
  
	/* Stijl voor de image van de persoon */
	.person img {
	  position: relative;
	  width: 320px;
	  top: 164px;
	  left: 22px;
	  transform: translateY(20px) scale(1.15);
	  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
	}
  
	/* Stijl voor de naam van de persoon */
	.person h1 {
	  color: #ffffff;
	  margin-top: 10px;
	  font-size: 1.2em;
	}

  a{
	text-decoration: none;
  }
	/* Hover-effect op de container */
	.container:hover {
	  transform: scale(0.54);
	}
  
	/* Hover-effect op de afbeelding van de persoon */
	.container:hover img {
	  transform: translateY(0) scale(1.3);
	}
  </style>
  