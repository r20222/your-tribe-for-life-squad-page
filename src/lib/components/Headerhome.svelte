<script>
import { onMount } from 'svelte';

let time = new Date();
let shownav = false;
let close = false;

$: hours = time.getHours();
$: minutes = time.getMinutes();

onMount(() => {
    const interval = setInterval(() => {
        time = new Date();
    }, 1000);

    return () => {
        clearInterval(interval);
    };
});

onMount(() => {
    var myArray = [
    "Roelie Jansen",
    "Rick Vellinga",
    "Nazneen Sheikkariem",
    "Zenit Araya",
    "Daan Carstens",
    "Amber v/d Reijden"
    ];

    let randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    document.getElementById("randomItem").innerHTML = randomItem;

    // document.body.innerHTML = randomItem;
});
</script>

<header class="desktop">
    <section class="nav">
        <a href="#" class="active">Home</a>
        <a href="#">Squad A</a>
    </section>
    <section class="profile">
        <span class="icon">
            <i class="fa fa-search"></i>
        </span>
        <span class="icon">
            <i class="fa fa-cog"></i>
        </span>
        <span class="icon">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/b46ea1130745055.6186c82d0c1d4.png" alt="profile icon" class="student">
        </span>
        <span class="time">{hours}:{minutes}</span>
    </section>
</header>

<header class="mobile">
    <section class="nav">
        <span class="profile-img">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/b46ea1130745055.6186c82d0c1d4.png" alt="" class="student">
        </span>
        <span id="randomItem" class="name"></span>
    </section>
    <section class="profile">
        <span class="icon">
            <button class="fa fa-bars" on:click={() => ((shownav = !shownav))}></button>
        </span>
    </section>
</header>

<nav class:shownav>
    <section class="mobile-nav">
        <a href="#">Squad A</a>
        <a href="#">Squad B</a>
    </section>
</nav>

<style>
    * {
        box-sizing: border-box;
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }

    header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 40px;
    }

    header .nav {
        font-size: 2rem;
        color: #8f97aa;
        display: flex;
        justify-content: space-between;
        width: 250px;
        font-weight: 100;
    }

    header .nav .active {
        font-weight: 700;
        color: white;
    }

    header .profile {
        width: 450px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        padding-left: 0;
    }

    header .profile .fa {
        font-size: 2rem;
        cursor: pointer;
        color: white;
    }

    .student {
        width: 50px;
        aspect-ratio: 1/1;
        border-radius: 50%;
    }

    header .profile .time {
        font-size: 2rem;
        color: white;
    }

    .icon {
        transition: transform .5s;
    }

    .icon:hover {
        /* background-color: grey; */
        border-radius: 50%;
        transform: scale(1.1);
    }


    /* Mobiel */
    header.mobile {
        display: none;
        width: 100%;
        justify-content: space-between;
        padding: 20px;
    }

    .mobile .profile {
        width: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        padding-left: 0;
    }

    .mobile .nav {
        justify-content: flex-start;
        align-items: center;
        width: auto;
    }

    .mobile .profile-img img {
        width: 40px;
    }
    

    .profile-img {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }

    header .nav .name {
        color: white;
        font-size: 1.2rem;
        padding-left: 20px;
        font-weight: 500;
    }

    header .profile i.fa-bars {
        font-size: 1.5rem; 
        color: white;
        cursor: pointer;
    }

    button {
        background: none;
        outline: none;
        border: none;
    }

    nav {
        position: fixed;
        bottom: -50em;
        left: 0;
        width: 100%;
        height: 80vh;
        border-top-left-radius: 7%;
        border-top-right-radius: 7%;
        background-color: #121315;
    }

    nav .mobile-nav {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 40px;
    }

    nav .mobile-nav a {
        font-size: 1.3rem;
        color: white;
        border-bottom: 1px solid grey;
        padding: 10px 10px 10px 0;
        font-weight: 500;
    }

    .shownav {
        bottom: 0;
        transition: .7s;
    }
    
    @media screen and (max-width: 950px) {
        header .nav {
            font-size: 1.5rem;
            width: 200px;
        }

        header .profile {
            width: 350px;
        }

        header .profile .fa {
            font-size: 1.5rem;
            color: white;
        }
        .student {
            width: 35px;
            aspect-ratio: 1/1;
            border-radius: 50%;
        }
    }

    @media screen and (max-width: 750px) {
        header .nav {
            font-size: 1.5rem;
            width: 175px;
        }

        header .profile {
            width: 250px;
        }
    }

    @media screen and (min-width: 600px) {
        nav {
            display: none;
        }
    }
    
    @media screen and (max-width: 600px) {
        .desktop {
            display: none;
        }
        header.mobile {
            display: flex;
        }
    }

</style>