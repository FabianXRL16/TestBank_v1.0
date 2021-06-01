<template>
  <div
    class="flex flex-col justify-center items-center shadow-md rounded-md border border-l-0 border-r-0 border-t-0 border-b-4 md:border-b-8 border-blue-400 p-4 md:p-6"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "card",
  props: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>