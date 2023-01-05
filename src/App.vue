<template>
  <nav>
    <router-link to="/home">Accueil</router-link> |
    <router-link to="/search">Recherche d'adresse</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

a:hover {
    color: #322d2d70 ! important;
}
nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #0b0b0b;
}
</style>
