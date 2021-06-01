<template>
  <div class="md:pt-36 pt-20 md:mt-14 h-screen">
    <titlePage title="Modalidades"/>
    <contetnt-list-modality :itemsExam="itemsExam" />
  </div>
</template>

<script>
import titlePage from "../title/titlePage.vue";
import contetntListModality from "../content/contetntListModality.vue";

export default {
  name: "contentModality",
  components: { titlePage, contetntListModality},
  props: {
    itemsExam: {
      type: Array,
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