<template>
    <div class="un">
        <div class="fotos">
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
            <h1><strong>Content is the <br>key to building <br>an audience</strong></h1>
            <p>Mauris donec turpis suscipit sapien aciix sagittis sapien <br> tempor a volute ligula and aliquet tortor</p>
        </div>
            <img src="../assets/img/hero-2-img.png" alt="">
    </div>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style >
*,
*::before,
*::after {
  box-sizing: border-box;
margin: 0px;
  

 
}
.un{
   
    height: 200vh;
   
}
.fotos{
   width: 100%;
    height: 1000px;
  
    background-image: url(../assets/img/hero-1.jpg);  
    background-attachment: fixed;
    background-position: center;
    background-size: cover; 
   
   
}

.headers-un{
display: flex;
width: 100% ;

font-family: 'Plus Jakarta Sans', sans-serif;
margin-top: 0;
font-size: 1.3rem;

position: relative;
}
.headers-un ul {
display: flex;
list-style-type: none;
gap: 3.5vw;
margin-top: 3vw;
font-weight: 900;
line-height: 50px;
position: relative;
}
.headers-un li{
color: aliceblue;
}
.headers-un img{
left: 0;
width: 11.2%;

margin-left: 0;
margin: 4vh;
position: relative;
}
.headers-deux{
display: flex;
color: aliceblue;
gap: 1.5vw;
margin-top: 3vw;
margin-left: 3.4vw;
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
gap: 6vw;
color: aliceblue;
font-family: 'Plus Jakarta Sans', sans-serif;

position: relative;
}
.un-un-un{
    -webkit-animation: fadeInRight 2.2s both;
    -moz-animation: fadeInRight 2.2s both;
    -o-animation: fadeInRight 2.2s both;
    animation: fadeInRight 1.5s both;
}
.un-un-un h1{
    font-size: 75px;
}
.un-un-un p{
    font-size: 21px;  
    line-height: 1.25;
}
.un-un img{

    width: 43%;
    margin-left: 1.6vw;
    -webkit-animation: fadeInLeft 2.2s both;
    -moz-animation: fadeInLeft 2.2s both;
    -o-animation: fadeInLeft 2.2s both;
    animation: fadeInLeft 1.5s both;
}

@-webkit-keyframes fadeInLeft{
    0%{
        opacity: 0;
        -webkit-transform: translateX(-70px);
    }
   
    100%{
        opacity: 1;
        -webkit-transform: translateX(0);
    }
}
@-moz-keyframes fadeInLeft{
    0%{
        opacity: 0;
        -moz-transform: translateX(-70px);
    }
   
    100%{
        opacity: 1;
        -moz-transform: translateX(0);
    }
}
@-o-keyframes fadeInLeft{
    0%{
        opacity: 0;
        -o-transform: translateX(-70px);
    }
    
    100%{
        opacity: 1;
        -o-transform: translateX(0);
    }
}
@keyframes fadeInLeft{
    0%{
        opacity: 0;
        -webkit-transform: translateX(-70px);
    }
   
    100%{
        opacity: 1;
        transform: translateX(0);
    }
}
@-webkit-keyframes fadeInRight{
    0%{
        opacity: 0;
        -webkit-transform: translateX(-70px);
    }
   
    100%{
        opacity: 1;
        -webkit-transform: translateX(0);
    }
}
@-moz-keyframes fadeInRight{
    0%{
        opacity: 0;
        -moz-transform: translateX(-70px);
    }
   
    100%{
        opacity: 1;
        -moz-transform: translateX(0);
    }
}
@-o-keyframes fadeInRight{
    0%{
        opacity: 0;
        -o-transform: translateX(-70px);
    }
    
    100%{
        opacity: 1;
        -o-transform: translateX(0);
    }
}
@keyframes fadeInRight{
    0%{
        opacity: 0;
        -webkit-transform: translateX(-70px);
    }
   
    100%{
        opacity: 1;
        transform: translateX(0);
    }
}
</style>