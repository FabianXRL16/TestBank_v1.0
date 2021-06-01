<template>
  <card class="mt-0 sm:mt-10 md:mt-12 md:py-20">
    <contentDataViewExam :dataExam="dataExam" />
  </card>
</template>

<script>
import contentDataViewExam from "../content/contentDataViewExam.vue";
import card from "../global/card.vue";

export default {
  name: "viewExam",
  components: {
    card,
    contentDataViewExam,
  },
  props: {
    dataExam: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
</style>