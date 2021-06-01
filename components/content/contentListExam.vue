<template>
  <div class="sm:px-4 md:px-16">
    <list-exam :itemsExam="itemsExam" />
  </div>
</template>

<script>
import listExam from "../list/listExam.vue";

export default {
  name: "contentListExam",
  components: { listExam },
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
