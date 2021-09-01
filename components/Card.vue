<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg card">
    <a :href="url" target="_blank">
      <img class="w-full" :src="img" alt="logo" />
    </a>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">
        {{ title }}
      </div>
      <p class="text-gray-700 text-base">
        {{ description }}
      </p>
    </div>
    <div class="px-6 py-4">
      <span
        v-for="label in labels"
        :key="label"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >#{{ label }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    labels: {
      type: Array,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.card {
  display: inline-block;
  margin: 20px;
}
img {
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-height: 350px;
}
</style>
