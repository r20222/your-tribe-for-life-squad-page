<!-- <header>
    <a class="go-back-button" href="/" title="Go back">&#8592; Go back</a>
</header> -->

<script>
    import Header from '$lib/components/Headerhome.svelte'
</script>

<Header />

<div class="img-name-center">
    <section class="desktop-img-name-container">
        <picture class="image-personal-page">
            <img src="" alt="" title="">
        </picture>
        
        <article class="name-squad">
            <h1>Naam</h1>
            <p class="squad">Squad nr</p>
        </article>
    </section>
</div>


<a class="visitekaart-link" href="/" title="" target="_blank">Visit profile card &#8594;</a>

<div class="bio-desktop-center">
    <div class="bio-container">
        <p class="bio">Biography BLablablablalbalblablalblalbla bla bla bla bla bla bla bla blablalbalblalblalblalblalbaba.</p>
    </div>
    
</div>


<h2 class="mobile-h2">Naam's skills</h2>
<section class="all-skills">
    <div class="desktop-skills-visiterkaart">
        <h2>Naam's skills</h2>
        <a class="desktop-visitekaart-link" href="/" title="" target="_blank">Visit profile card &#8594;</a>
    </div>
    <!-- hier each loop maken voor elke skill 1 div.skill -->
    <div class="skill">
        <img class="skill-img" src="" alt="" title="" width="50" height="50">
        <h3>Skill name</h3>
    </div>
    <div class="skill">
        <img class="skill-img" src="" alt="" title="" width="50" height="50">
        <h3>Skill name</h3>
    </div>
    <div class="skill">
        <img class="skill-img" src="" alt="" title="" width="50" height="50">
        <h3>Skill name</h3>
    </div>
    <div class="skill">
        <img class="skill-img" src="" alt="" title="" width="50" height="50">
        <h3>Skill name</h3>
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
    /* header{
        background-color: black;
        height:70px;
        display: flex;
        align-items: center;
    }
    .go-back-button{
        border:none;
        font-size: 1.5rem;
        margin-left: 1rem;
        background-color: transparent;
        color:white;
        text-decoration: none;
    } */
    picture{
        height: 234px;
        width:100vw;
    }
    picture img{
        height:234px;
        width:100vw;
        background-color: grey;
    }
    h1, .squad{
        margin-left: 3.1rem;
        line-height:1rem;
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
    .skill-img{
        margin-left: 2rem;
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
        .skill-img{
            margin-left: 2.5rem;
        }
        .skill{
            width: 80vw;
            height: 10rem;
            border-radius:0;
            border-bottom: 1px solid white;
            background-color: transparent;
            gap: 8rem;
        }
        
    }
</style>