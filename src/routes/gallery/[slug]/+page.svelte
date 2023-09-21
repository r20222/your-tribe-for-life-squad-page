<script>
    import { page } from '$app/stores' ;
    import Header from '$lib/components/Headerhome.svelte'
    import DiHtml5 from 'svelte-icons/di/DiHtml5.svelte'
    import DiCss3 from 'svelte-icons/di/DiCss3.svelte'
    import DiJavascript1 from 'svelte-icons/di/DiJavascript1.svelte'
    export let data
</script>

<Header />
<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->

<div class="img-name-center">
    <section class="desktop-img-name-container">
        <picture class="image-personal-page">
            <img src="{data.picture.url}" alt="{data.picture.alt}" title="{data.picture.alt}">
        </picture>
        
        <article class="name-squad">
            <h1>{data.name}</h1>
            <p class="squad">Squad B</p>
        </article>
    </section>
</div>


<a class="visitekaart-link" href="{data.card.url}" title="Visitekaart {data.name}" target="_blank">Visit profile card &#8594;</a>

<div class="bio-desktop-center">
    <div class="bio-container">
        <p class="bio">{data.about[0].text}</p>
    </div>
    
</div>


<h2 class="mobile-h2">{data.name}'s skills</h2>
<section class="all-skills">
    <div class="desktop-skills-visiterkaart">
        <h2>{data.name}'s skills</h2>
        <a class="desktop-visitekaart-link" href="{data.card.url}" title="Visitekaart {data.name}" target="_blank">Visit profile card &#8594;</a>
    </div>

    <div class="skill">
        <div class="icon-container">
            <DiHtml5 />
        </div>
        <h3>HTML</h3>
    </div>
    <div class="skill">
        <div class="icon-container">
            <DiCss3  />
        </div>
        <h3>CSS</h3>
    </div>
    <div class="skill">
        <div class="icon-container">
            <DiJavascript1 />
        </div>
        <h3>JavaScript</h3>
    </div>
    <div class="skill">
        <div class="icon-container">
            <img class="skills-img-svelte" src="/svelte-logo.svg" alt="Svelte" title="Svelte" width="150" height="150">
        </div>
        <h3>Svelte</h3>
    </div>
</section>



<style>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Open+Sans:wght@300&display=swap');

    :global(html){
        background-color: #1F1F1F;
        color:white;
        overflow-x: hidden;
        font-family: 'Open Sans';
        background: url('/bg-home.jpg');
        background-size: cover;
        background-repeat: no-repeat;
    }
    :global(body){
        margin:0rem;
        padding:0rem;
        
    }
    picture{
        height: 234px;
        width:100vw;
    }
    picture img{
        height:234px;
        width:100vw;
        background-color: black;
        object-fit: contain;
    }
    h1{
        margin-top:2rem;
    }
    h1, .squad{
        margin-left: 3.1rem;
        /* line-height:1rem; */
    }
    .squad{
        margin-bottom:3rem;
    }
    .visitekaart-link{
        color:white;
        background-color: black;
        padding: .8rem 2rem;
        font-size: 1.2rem;
        border-radius: 50px;
        margin-left: 1.1rem;
        margin-top:5rem;
        text-decoration: none;
    }
    .bio{
        margin: 4rem 3.1rem 2rem 3.1rem;
        max-width: 20rem;
    }
    .all-skills{
        width:100vw;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:1rem;
        margin-bottom: 3rem;
    }
    .mobile-h2{
        align-self: start;
        margin-left: 3.1rem;
        margin-bottom:1rem;
    }
    .skill{
        height:64px;
        width: calc(100vw - 2.2rem);
        background-color: black;
        border-radius: 1rem;
        display:flex;
        align-items: center;
        gap: 1rem;
    }
    .icon-container{
        height: 100%;
        width: 10rem;
        display: flex;
        justify-content: center;
    }
    .icon-container .skills-img-svelte{
        width:4rem;
        height:4rem;
    }
    .desktop-skills-visiterkaart{
        display: none;
    }

    /* desktop vanaf 1000px */

    @media screen and (min-width: 62.5em){
        picture{
            height: 234px;
            width:20rem;
        }
    
        picture img{
            width:10rem;
            height:10rem;
            border-radius: 50%;
            margin-top:2rem;
            /* margin-left: 12rem; */
        }
        .img-name-center{
            display: flex;
            justify-content: center;
        }
        .desktop-img-name-container{
            display:flex;
            width: 80vw;
        }
        .name-squad{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        h1{
            margin-top: 0;
            margin-left:0;
        }
        .bio-desktop-center{
            display:flex;
            justify-content: center;
        }
        .bio-container{
            width:80vw;
        }
        .bio{
            margin: 0;
        }
        .squad{
            margin-left:0;
            margin-bottom:0;
            margin-top:0;
        }
        .visitekaart-link{
            display: none;
        }
        .desktop-skills-visiterkaart{   
            align-self: center;
            margin-top: 5rem;
            margin-bottom:0;
            flex-direction: row;
            display: flex;
            width: 80vw; 
            justify-content: space-between;
        }
        .desktop-visitekaart-link{
            display:flex;
            align-items: center;
            margin-top:0;
            margin-left:0;
            margin-right: -2rem;
            color:white;
            background-color: black;
            padding: .8rem 2rem;
            font-size: 1.2rem;
            border-radius: 50px;
            text-decoration: none;
        }
        .mobile-h2{
            display: none;
        }
        h2{
            margin-top:0.8rem;
            padding-left:0;
        }
        .skill{
            width: 80vw;
            height: 10rem;
            border-radius:0;
            border-bottom: 1px solid white;
            background-color: transparent;
            gap: 8rem;
        }
        .icon-container .skills-img-svelte{
            width:9rem;
            height:9rem;
        }
        
    }
</style>