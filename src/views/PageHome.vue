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
            <div class="un-un">
                <button>Sign up</button>
            </div>
        </div>
    </div>
       
       
    </header>
    <div class="un-un"></div>
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
    gap: 2vw;
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
    gap: 2vw;
    margin-top: 3vw;
    position: relative;
}
.un-un button{
    width: 7vw;
    height: 3vw;
    border-radius: 9px;
}
</style>