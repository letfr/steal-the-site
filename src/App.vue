<template>
  <div id="app">
  <link rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
  integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
  crossorigin="anonymous" />
    <NavBar class="navbar" />
    <router-view />
    <footer>
      FEITO COM ❤️ PELA LOOK STEALER LETICIA FARIA
    </footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: { NavBar },
};
</script>

<style lang="scss">
@import '../public/reset.css';
@import 'assets/css/variables.css';
@import 'assets/css/global.css';

.app {
  height: 100vh;
}

footer {
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  padding: 10px;
  background-color: #000;
  text-align: center;
}

@media (max-width: 600px) {
  footer {
    font-size: 12px;
  }
}
</style>
