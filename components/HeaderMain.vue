<template>
  <div class="container mx-auto">
    <div class="container mx-auto text-6xl">{{ title }}</div>
    <div class="container mx-auto text-3xl">{{ description }}</div>

    <a :href="contact.github" target="_blank"
      ><GithubIcon
        class="icon transition duration-500 ease-in-out hover:text-teal-800 transform hover:-translate-y-1 hover:scale-110"
    /></a>
    <a :href="contact.linkedin" target="_blank"
      ><LinkedinIcon
        class="icon transition duration-500 ease-in-out hover:text-teal-800 transform hover:-translate-y-1 hover:scale-110"
    /></a>
    <a :href="contact.twitter" target="_blank"
      ><TwitterIcon
        class="icon transition duration-500 ease-in-out hover:text-teal-800 transform hover:-translate-y-1 hover:scale-110"
    /></a>
    <a :href="`mailto:{{contact.mail}}`" target="_blank"
      ><MailIcon
        class="icon transition duration-500 ease-in-out hover:text-teal-800 transform hover:-translate-y-1 hover:scale-110"
    /></a>
  </div>
</template>

<script>
import GithubIcon from './icons/GithubIcon.vue';
import LinkedinIcon from './icons/LinkedinIcon.vue';
import TwitterIcon from './icons/TwitterIcon.vue';
import MailIcon from './icons/MailIcon.vue';

export default {
  name: 'HeaderMain',
  components: {
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
    MailIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.icon {
  margin: 1%;
}
</style>
