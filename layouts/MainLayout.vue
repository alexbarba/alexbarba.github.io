<template>
  <div class="container mx-auto main-layout">
    <div class="divide-y-2 divide-black divide-opacity-25">
      <div>
        <HeaderMain
          :title="title"
          :description="description"
          :contact="contact"
        />
        <n-link to="/">Portfolio</n-link>
        <n-link to="/about">About</n-link>
      </div>
      <div class="m-4">
        <slot class="m-8"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMain from '../components/HeaderMain.vue';

export default {
  name: 'MainLayout',
  components: {
    HeaderMain,
  },
  data: () => {
    return {
      title: 'Alexis Barba',
      description: 'Portafolio Personal',
      contact: {
        github: 'https://github.com/alexbarba/',
        linkedin: 'https://www.linkedin.com/alexisbarba',
        twitter: 'https://www.linkedin.com/AlexBarba_',
        mail: 'alexis.barba.perez@gmail.com',
      },
    };
  },
};
</script>

<style>
.main-layout {
  text-align: center;
  margin-top: 30px;
}
</style>
