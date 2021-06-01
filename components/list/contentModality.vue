<template>
  <div class="md:pt-36 pt-20 md:mt-14 h-screen">
    <titlePage title="Modalidades"/>
    <contentListModality :itemsExam="itemsExam" />
  </div>
</template>

<script>
import titlePage from "../title/titlePage.vue";
import contentListModality from "../content/contetntListModality.vue";

export default {
  name: "contentModality",
  components: { titlePage, contentListModality},
  props: {
    itemsExam: {
      type: Array,
      required: true,
    },
    type:{
      type: String,
      required: true,
    }
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>