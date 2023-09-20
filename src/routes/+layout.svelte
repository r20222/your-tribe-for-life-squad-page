
<main>
    <slot />
</main>

<style>

    :global(*) {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    main {
    margin: auto;
    overflow: auto;
    background: linear-gradient(315deg, rgb(3, 5, 53) 3%, rgb(1, 32, 64) 38%, rgb(16, 13, 39) 68%, rgb(5, 10, 51) 98%);
    animation: gradient 15s ease infinite;
    background-attachment: fixed;
    width: 100VW;
    height: 100VH;
}

</style>