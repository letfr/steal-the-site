<template>
  <section class="home">
    <header>
      <h1>STEAL THE <b>SITE</b></h1>
      <nav>
        <li><a href="">LOOKS</a></li>
        <li><a href="">TENDÊNCIAS</a></li>
        <li><a href="">BELEZA</a></li>
        <li><a href="">ASTROLOGIA</a></li>
        <li><a href="">RECEITAS</a></li>
        <li><a href="">COMPORTAMENTO</a></li>
        <li><a href="">WELLNESS</a></li>
        <li><a href="">DECOR</a></li>
        <li><a href="">CARREIRAS</a></li>
      </nav>
    </header>
    <main class="content">
      <div>
        <PostPreview
          imageUrl="look1.jpeg"
          alt="Looks imagem"
          category="looks"
          title="LETICIA FARIA: NOVA DEVELOPER FASHION PARA FICAR DE OLHO"
          subtitle="Conheça Leticia Faria, a futura desenvolvedora do Steal the look."
        />
        <PostPreview
          imageUrl="look2.jpeg"
          alt="Comportamento imagem"
          category="comportamento"
          title="6 TRUQUES INFALÍVEIS PARA CONSEGUIR UMA VAGA NO STL"
          subtitle="Entre elas, está montar um site fake do Steal de look."
        />
        <PostPreview
          imageUrl="look3.jpeg"
          alt="Wellness imagem"
          category="wellness"
          title="OS MELHORES DESTINOS PARA SUAS PRÓXIMAS FÉRIAS"
          subtitle="Quando a Catha e a Manu me derem férias estarei
             pleníssima em algum desses lugares!"
        />
      </div>
      <aside>
        <div>
          <h2>#STEALTHE<b>CV</b></h2>
          <a href="https://letfr.github.io/portfolio/static/media/cv-pt.99f7453e.pdf">
            <img src="@/assets/cv.jpeg" alt="curriculo">
          </a>
        </div>
        <div class="newsletter">
          <p><span class="far fa-envelope"></span> ASSINE NOSSA NEWSLETTER</p>
          <input type="text" placeholder="informe seu email...">
        </div>
        <div>
          <h2><b>@</b>LETFR</h2>
          <a href="https://letfr.github.io/portfolio/">
            <img src="@/assets/projetos.jpeg" alt="github">
          </a>
        </div>
      </aside>
    </main>
  </section>
</template>

<script>
import PostPreview from '@/components/PostPreview.vue';

export default {
  name: 'Home',
  components: {
    PostPreview,
  },
};
</script>

<style lang="scss">
header {
  h1 {
    text-align: center;
    font-size: 132px;
    font-weight: 700;
    letter-spacing: -3px;

    > b {
      animation: change-color 4s infinite steps(2, end);
    }
  }

  nav {
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid var(--black);
    border-bottom: 1px solid var(--black);

    li {
      padding: 20px 0;

      a {
        font-size: 14px;
        color: var(--black);
        font-weight: 600;

        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
}

.content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
}

aside {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px 0;

  h2 {
    font-size: 33px;
  }

  img {
    margin: 10px 0;
    width: 250px;
    height: 250px;
  }

  .newsletter {
    margin: 20px 0;
    font-size: 14px;
    font-weight: 700;
    width: 250px;
    background-color: var(--black);
    color: var(--white);
    padding: 15px;

    span {
      margin-right: 5px;
    }

    input {
      width: 100%;
      margin-top: 10px;
      padding: 5px;
    }
  }
}

@keyframes change-color {
  20% {
    color: var(--primary-color);
  }
  40% {
    color: var(--secondary-color);
  }
  60% {
    color: var(--black);
  }
}

@media (max-width: 600px) {
  section.home {
    padding: 0 10px;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    .newsletter {
      display: none;
    }

    aside {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      img {
        width: 160px;
        height: 160px;
      }

      h2 {
        font-size: 20px;
      }
    }
  }

  header {
    display: none;
  }
};
</style>
