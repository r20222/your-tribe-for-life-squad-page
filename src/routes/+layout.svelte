<main>
	<slot />
</main>

<script>
    import { onNavigate } from '$app/navigation'

    onNavigate((navigation) => {
    if (!document.startViewTransition) return

    return new Promise((resolve) => {
        document.startViewTransition(async () => {
            resolve()
            await navigation.complete
        })
    })
	})

</script>


<style>
	:global(*) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	/* main {
    margin: auto;
    overflow: auto;
    background: linear-gradient(315deg, rgb(0, 2, 58) 3%, rgb(0, 23, 47) 38%, rgb(6, 0, 49) 68%, rgb(0, 7, 58) 98%);
    animation: gradient 15s ease infinite;
    background-attachment: fixed;
    width: 100VW;
    height: 100VH;
} */

	@keyframes gradient {
		0% {
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
