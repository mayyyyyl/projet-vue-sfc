<template>
  <div class="container">
    <h1 class="text-center pb-4 pt-5">Retrouvez des informations sismiques.</h1>
    <p class="text-center p-1 pb-5">Grâce aux coordonnées de l'adresse sélectionnée, nous sommes en mesure de vous
      fournir plus d'informations. Notamment, si celle-ci est à risque sismique.</p>
  </div>
</template>

<script>

import axios from 'axios';

// https://www.georisques.gouv.fr/api/v1/zonage_sismique?latlon=-1.850351%2C49.642288&rayon=1000
const apiURL = "https://www.georisques.gouv.fr/api/v1/zonage_sismique?latlon="
const rayon = "&rayon=1000"


export default {
  name: 'SeismicArea',
  props: {
    msg: String
  },
  data() {
    return {
      level: "",
      latlon: ""
    }
  },
  created: {},
  watch: {},
  methods: {
    async fetchData() {
      try {
        this.latlon
        console.log("latlon = ", latlon)
        const response = await axios.get(apiURL + this.latlon + rayon);
        this.level = response.data;
        console.log("level = ", this.level)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>

</style>
