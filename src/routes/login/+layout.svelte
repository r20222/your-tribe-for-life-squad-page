<main>
    <slot />
</main>

<style>
main {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  background: linear-gradient(-45deg, #000000, #000450, #000000, #000450);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

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