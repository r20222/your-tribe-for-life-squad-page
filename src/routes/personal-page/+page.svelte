<header>
    <a class="go-back-button" href="/" title="Go back">&#8592; Go back</a>
</header>

<picture class="image-personal-page">
    <img src="" alt="" title="">
</picture>

<h1>Naam</h1>
<p class="squad">Squad nr</p>

<a class="visitekaart-link" href="/" title="" target="_blank">Visit profile card &#8594;</a>

<p class="bio">Biography BLablablablalbalblablalblalbla blablalbalblalblalblalblalbaba.</p>

<section class="all-skills">
    <h2>Naam's skills</h2>
    <!-- hier each loop maken voor elke skill 1 div.skill -->
    <div class="skill"></div>
    <div class="skill"></div>
    <div class="skill"></div>
    <div class="skill"></div>
</section>



<style>
    :global(html){
        background-color: #1F1F1F;
        color:white;
    }
    :global(body){
        margin:0rem;
        padding:0rem;
    }
    header{
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
    }
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
    }
    .bio{
        margin: 4rem 3.1rem 2rem 3.1rem;
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
    h2{
        align-self: start;
        margin-left: 3.1rem;
        margin-bottom:0;
    }
    .skill{
        height:64px;
        width: calc(100vw - 2.2rem);
        background-color: black;
        border-radius: 1rem;
    }
</style>