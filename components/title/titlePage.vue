<template>
  <div class="text-2xl sm:text-3xl md:text-4xl text-blue-600 font-medium md:mb-16 sm:mb-8 mb-10  flex justify-center">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: "titlePage",
  components: {},
  props: {
    title:{
      type: String,
      required: true,
    }
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>
