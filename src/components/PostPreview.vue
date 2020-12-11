<template>
  <article>
    <img :src="require(`../assets/${imageUrl}`)" :alt="alt">
    <div class="description">
      <span class="category">{{ category }}</span>
      <h2>{{ title }}</h2>
      <span>10/12/2020 por Leticia Faria</span>
      <h3>{{ subtitle }}</h3>
    </div>
  </article>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    imageUrl: {
      type: String,
    },
    category: {
      type: String,
    },
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    alt: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
article {
  padding: 40px 0;
  display: flex;
  border-bottom: 1px solid #000;

  img {
    width: 300px;
    height: 300px;
  }

  .description {
    padding: 10px 20px;

    h2 {
      font-size: 26px;
      font-weight: 600;
      font-family: var(--secondary-font);
    }

    h3 {
      margin-top: 20px;
      font-size: 14px;
    }

    span {
      text-decoration-style: italic;
      font-family: var(--span-font);
      color: var(--primary-color);;
      font-size: 16px;
    }

    .category {
      font-size: 20px;
    }
  }
}
</style>
