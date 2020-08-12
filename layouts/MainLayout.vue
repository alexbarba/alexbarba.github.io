<template>
  <div>
    <div class="container mx-auto main-layout">
      <div class="divide-y-2 divide-black divide-opacity-25">
        <div>
          <HeaderMain
            :title="title"
            :description="description"
            :contact="contact"
          />
          <div class="">
            <n-link
              to="/"
              class="text-blue-800 underline text-xl hover:text-teal-800 m-2"
              >Portfolio</n-link
            >
            <p class="text-blue-800 inline">|</p>
            <n-link
              to="/about"
              class="text-blue-800 underline text-xl hover:text-teal-800 m-2"
              >About</n-link
            >
          </div>
        </div>
        <div class="m-4">
          <slot class="m-8"></slot>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import HeaderMain from './HeaderMain';
import Footer from './Footer';

export default {
  name: 'MainLayout',
  components: {
    HeaderMain,
    Footer,
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
