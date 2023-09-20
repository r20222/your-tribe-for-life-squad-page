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
  background: linear-gradient(315deg, rgb(3, 5, 53) 3%, rgb(1, 32, 64) 38%, rgb(16, 13, 39) 68%, rgb(5, 10, 51) 98%);

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