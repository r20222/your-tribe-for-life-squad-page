<script>
    export let data
  </script>

   <main>
    <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        </div>
        <div class="image">
        <a href="/login"><img src="icons8-playstation-250.svg" alt="Logo PS5" style="width:120px;height:120px;"></a>
     </div>
   </main>

    <style>

*{
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

.wave {
    background: rgb(255 255 255 / 25%);
    border-radius: 1000% 1000% 0 0;
    position: fixed;
    width: 200%;
    height: 12em;
    animation: wave 10s -3s linear infinite;
    transform: translate3d(0, 0, 0);
    opacity: 0.8;
    bottom: 0;
    left: 0;
}

.wave:nth-of-type(2) {
    bottom: -1.25em;
    animation: wave 18s linear reverse infinite;
    opacity: 0.8;
}

.wave:nth-of-type(3) {
    bottom: -2.5em;
    animation: wave 20s -1s reverse infinite;
    opacity: 0.9;
}

@keyframes wave {
    2% {
        transform: translateX(1);
    }

    25% {
        transform: translateX(-25%);
    }

    50% {
        transform: translateX(-50%);
    }

    75% {
        transform: translateX(-25%);
    }

    100% {
        transform: translateX(1);
    }
}
.image{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 19rem;

}
img{
    border: 2px solid #ddd;
    border-radius: 50%; 
    padding: 2px; 
}

    </style>