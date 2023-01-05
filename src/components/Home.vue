<template>
  <body>
    <div class="container" id="main" v-cloak>
        <h1 class="text-center pb-2 pt-1">Découvrez la zone sismique de votre logement</h1>
        <p class="text-center p-1 pb-1">Si vous souhaitez acheter une habitation et connaître sa zone sismique ou avoir des informations sismiques sur votre logement actuel.</p>
        <p class="text-center p-1 pb-1"> Cette application est faite pour vous ! </p>
        <p class="text-center p-1 pb-1"> En entrant simplement une adresse postale vous découvrirez l'indice sismique d'un logement de très faible a très élevé.</p>
        <p class="text-center p-1 pb-1"> "Les informations données sont issues de sources gouvernementales"</p>
        <div class="row pb-4 align-items-center"></div>
        <img src="../assets/carte-zones-sismiques.jpg" height="300px" width="300px" />
    </div>
  </body>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<style>
body {
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #ff8800f9 ! important;
}
.container {
    padding: 50px;
    background-color: #fff;
    border-radius: 10px;
    width: 650px;
    box-shadow: 0 0 25px rgba(0,0,0,0.1);
}
</style>
