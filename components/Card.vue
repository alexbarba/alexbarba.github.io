<template>
  <a
    :href="url"
    target="_blank"
    class="grid content-center max-w-sm gap-4 p-4 overflow-hidden bg-white rounded shadow-lg "
  >
    <img class="w-full" :src="img" alt="logo" />

    <div class="px-6 py-4">
      <div class="mb-2 text-xl font-bold">
        {{ title }}
      </div>
      <p class="text-base text-gray-700">
        {{ description }}
      </p>
    </div>
    <div class="px-6 py-4">
      <span
        v-for="label in labels"
        :key="label"
        class="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full "
        >#{{ label }}</span
      >
    </div>
  </a>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    labels: {
      type: Array,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  }
};
</script>
<style scoped>
img {
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-height: 350px;
}
</style>
