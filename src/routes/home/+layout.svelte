<main>
    <slot/>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Open+Sans:wght@300&display=swap');

    :global(html, body) {
        margin: 0;
        padding: 0;
        height: 100vh;
        widows: 100vw;
        font-family: 'Open Sans';
    }

    main {
        background: url('/bg-home.jpg');
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        overflow: hidden;
    }
</style>    