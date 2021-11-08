
<template>
  <main-layout>
    <figure class="m-8">
      <img
        v-for="technology in technologies"
        :key="technology.name"
        class="inline-block h-40 m-4"
        :src="technology.src"
      />
    </figure>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue';

export default {
  name: 'Stack',
  components: {
    MainLayout
  },
  data: () => {
    return {
      technologies: [
        { src: 'https://i.imgur.com/x3CYclw.png', name: 'JavaScript' },
        { src: 'https://i.imgur.com/cFC4rej.png', name: 'HTML5' },
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png',
          name: 'CSS'
        },
        { src: 'https://i.imgur.com/9YHOqS6.png', name: 'React' },
        { src: 'https://i.imgur.com/DGIFtCv.png', name: 'Vue' },
        { src: 'https://i.imgur.com/aVSMiAF.png', name: 'Git' },
        { src: 'https://i.imgur.com/MIfbW7x.png', name: 'NextJS' },
        { src: 'https://i.imgur.com/dt7xOcw.png', name: 'TailwindCSS' },
        { src: 'https://i.imgur.com/aK5pheS.png', name: 'Python' },
        { src: 'https://i.imgur.com/xeZOCCj.png', name: 'Graphql' },
        { src: 'https://i.imgur.com/xNjaHz9.png', name: 'Apollo' },
        { src: 'https://i.imgur.com/Omud1zQ.png', name: 'Linux' }
      ]
    };
  }
};
</script>

<style>
</style>