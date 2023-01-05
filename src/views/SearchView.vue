<template>
  <div class="search">
    <SearchAdress msg="Bienvenue sur notre page de recherche d'adresse." />
  </div>
</template>

<script>
import SearchAdress from '@/components/SearchAdress.vue'

export default {
  name: 'SearchView',
  components: {
    SearchAdress
  }
}
</script>