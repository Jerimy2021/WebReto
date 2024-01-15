<template>
  <div class="page-container">
    <the-navigation></the-navigation>
    <router-view />
  </div>
</template>

<style>
.page-container {
  display: grid;
  grid-template-columns: 0.25fr 1fr; /* Same grid structure as TheNavigation */
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
import TheNavigation from './components/TheNavigation.vue';

export default {
  name: 'App',
  components: { TheNavigation },
};
</script>
