<template>
  <div class="md:pt-0 pt-0 h-screen">
    <titlePage :title="type === 'exam' ? `Examen ${itemsExam[0].title}` : 'Resultados'"/>
    <contentListExam :itemsExam="itemsExam" />
  </div>
</template>

<script>
import titlePage from "../title/titlePage.vue";
import contentListExam from "./contentListExam.vue";

export default {
  name: "contentExam",
  components: { titlePage, contentListExam},
  props: {
    itemsExam: {
      type: Array,
      required: true,
    },
    type: String
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>