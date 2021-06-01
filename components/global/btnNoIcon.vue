<template>
  <button
    class="w-auto flex items-center rounded-md py-2 px-5 extra md:mr-4"
  >
    <h1 class="text-white text-lg">{{title}}</h1>
  </button>
</template>

<script>
export default {
  name: "btn",
  components: {},
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>