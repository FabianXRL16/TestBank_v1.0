<template>
  <div
    class="flex justify-center items-center rounded w-28 md:h-12 h-10 text-lg"
  >
    <h1 class="">{{title}}</h1>
    <slot />
  </div>
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
.extra {
  outline: none;
}
</style>