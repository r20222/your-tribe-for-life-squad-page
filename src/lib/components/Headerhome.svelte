<script>
import { onMount } from 'svelte';

let time = new Date();

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
</script>

<header>
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
            <img src="https://randomuser.me/api/portraits/med/women/75.jpg" alt="" class="student">
        </span>
        <span class="time">{hours}:{minutes}</span>
    </section>
</header>

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
        color: white;
    }

    header .profile .student {
        width: 50px;
        aspect-ratio: 1/1;
        border-radius: 50%;
    }

    header .profile .time {
        font-size: 2rem;
        color: white;
    }

</style>