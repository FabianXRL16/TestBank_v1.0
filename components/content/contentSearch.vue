<template>
  <div class="h-screen flex flex-col items-center justify-center -mt-12">
    <titlePage title="Empecemos!" />
    <contentInputSeacrh />
  </div>
</template>

<script>
import titlePage from "../title/titlePage.vue";
import contentInputSeacrh from "../content/contentInputSearch.vue";

export default {
  name: "contentSeacrh",
  components: { titlePage, contentInputSeacrh },
  props: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>