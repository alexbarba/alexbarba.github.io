<template>
  <header class="grid w-full gap-6 mx-auto my-8">
    <h1 class="text-4xl text-bold sm:text-6xl">
      {{ title }}
    </h1>
    <h2 class="text-3xl">
      {{ description }}
    </h2>

    <div
      class="flex justify-center w-full gap-4 text-center align-middle md:gap-8"
    >
      <a :href="contact.github" target="_blank"
        ><GithubIcon
          class="text-red-400 transition duration-100 ease-in-out transform  hover:text-teal-800 hover:-translate-y-1 hover:scale-110"
      /></a>
      <a :href="contact.linkedin" target="_blank"
        ><LinkedinIcon
          class="text-red-400 transition duration-100 ease-in-out transform  hover:text-teal-800 hover:-translate-y-1 hover:scale-110"
      /></a>
      <a :href="contact.twitter" target="_blank"
        ><TwitterIcon
          class="text-red-400 transition duration-100 ease-in-out transform  hover:text-teal-800 hover:-translate-y-1 hover:scale-110"
      /></a>
      <a :href="`mailto:{{contact.mail}}`" target="_blank"
        ><MailIcon
          class="text-red-400 transition duration-100 ease-in-out transform  hover:text-teal-800 hover:-translate-y-1 hover:scale-110"
      /></a>
    </div>
  </header>
</template>

<script>
import GithubIcon from '../components/icons/GithubIcon.vue';
import LinkedinIcon from '../components/icons/LinkedinIcon.vue';
import TwitterIcon from '../components/icons/TwitterIcon.vue';
import MailIcon from '../components/icons/MailIcon.vue';

export default {
  name: 'HeaderMain',
  components: {
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
    MailIcon
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    contact: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.icon {
  margin: 1%;
}
</style>
