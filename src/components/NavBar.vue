<template>
  <section class="navbar">
    <nav>
      <ul class="menu"><span class="fa fa-bars fa-2x" /></ul>
    </nav>
    <p class="menu-title">STEAL THE <b>SITE</b></p>
    <div class="social-media">
      <a href="https://www.linkedin.com/in/letfr/" alt="linkedin"><span class="fab fa-linkedin fa-2x"></span></a>
      <a href="https://github.com/letfr" alt="github"><span class="fab fa-github fa-2x"></span></a>
      <a href="https://www.instagram.com/letfr/" alt="instagram"><span class="fab fa-instagram fa-2x"></span></a>
      <a href="https://open.spotify.com/user/le_ti_cia7?si=o-Egbr2MQhW8iTTLaQE9bg" alt="spotify">
        <span class="fab fa-spotify fa-2x"></span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 250px;
  height: 40px;
  background-color: var(--black);
  color: var(--white);

  .menu-title {
    display: none;
  }

  .social-media {
    > a {
      color: var(--white);
      padding: 5px;

      &:hover {
        color: var(--primary-color);
      }
    }
  }
}

@media (max-width: 600px) {
  .navbar {
    justify-content: start;
    padding: 0 10px;

    .menu-title {
      font-weight: 800;
      font-size: 30px;
      font-family: var(--primary-font);
      padding: 0 40px;
      display: block;
    }

    .social-media {
      display: none;
    }
  }
};
</style>
