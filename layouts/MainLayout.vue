<template>
  <div
    class="flex flex-col justify-center min-h-screen text-center bg-gray-100"
  >
    <HeaderMain :title="title" :description="description" :contact="contact" />
    <nav
      class="
        grid
        w-full
        max-w-[38rem]
        grid-cols-3
        py-4
        mx-auto
        text-center
        divide-x divide-red-500
        sm:text-2xl
        text-red-400 text-bold text-xl
      "
    >
      <n-link
        to="/"
        class="hover:text-yellow-500"
        :class="{ 'text-pink-800': isActive('/') }"
        >Portfolio
      </n-link>

      <n-link
        to="/about"
        class="hover:text-yellow-500"
        :class="{ 'text-pink-800': isActive('/about') }"
        >About
      </n-link>

      <n-link
        to="/stack"
        class="hover:text-yellow-500"
        :class="{ 'text-pink-800': isActive('/stack') }"
        >Stack
      </n-link>
    </nav>
    <div class="h-[2px] bg-red-400 mx-4 md:mx-20"></div>
    <main
      class="container py-8 mx-auto mb-auto divide-y-2 divide-black  divide-opacity-25"
    >
      <slot></slot>
    </main>

    <Footer />
  </div>
</template>

<script>
import HeaderMain from './HeaderMain';
import Footer from './Footer.vue';

export default {
  name: 'MainLayout',
  components: {
    HeaderMain,
    Footer
  },
  data: () => {
    return {
      title: 'Alexis Barba',
      description: 'Frontend Engineer',
      contact: {
        github: 'https://github.com/alexbarba/',
        linkedin: 'https://www.linkedin.com/in/alexisbarba',
        twitter: 'https://www.twitter.com/alexBarba_',
        mail: 'alexis.barba.perez@gmail.com'
      }
    };
  },
  methods: {
    isActive(route) {
      return this.$nuxt.$route.path === route;
    }
  }
};
</script>
