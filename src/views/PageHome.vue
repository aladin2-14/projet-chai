<template>
    <div class="un">
 <header>
    <div class="headers-un">
        <img src="../assets/logo-white.png" alt="">
        <ul>
            <li>About</li>
            <li>Features</li>
            <li>Page</li>
            <li>Pricing</li>
            <li>FAQs</li>

        </ul>
        <div class="headers-deux">
            <h3>Sign in</h3>
            <div class="hearders-trois">
                <button>Sign up</button>
            </div>
        </div>
    </div>
       
       
    </header>
    <div class="un-un">
        <div class="un-un-un">
            <h1>Content is the key <br>to building an <br>audience</h1>
            <p>Mauris donec turpis suscipit sapien aciix sagittis sapien <br> tempor a volute ligula and aliquet tortor</p>
        </div>
            <img src="../assets/img/hero-2-img.png" alt="">
    </div>
    </div>
   
</template>

<script>
export default {
   
}
</script>

<style>
.un{
    background-image:url(../assets/img/hero-1.jpg) ;
    height: 70vw;
    position: relative;
    
}
.headers{
    position: fixed;
    z-index: 1000;
    display: flex;
}
.headers-un{
    display: flex;
    width: 100% ;
    gap: 10vw;
    position: relative;
}
.headers-un ul {
    display: flex;
    list-style-type: none;
    gap: 1.5vw;
    margin-top: 3vw;
    position: relative;
}
.headers-un li{
    color: aliceblue;
}
.headers-un img{
    left: 0;
    width: 10vw;
    margin-top: 3vw;
    position: relative;
}
.headers-deux{
    display: flex;
    color: aliceblue;
    gap: 1.5vw;
    margin-top: 3vw;
    position: relative;
}
.headers-trois button{
    width: 7vw;
    height: 3vw;
    border-radius: 9px;
}
.un-un{
    display: flex;
    margin-top: 7vh;
    gap: 19vw;
}
.un-un img{
    
    width: 40%;
}
</style>