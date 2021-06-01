<template>
  <div class="sm:px-4 md:px-16">
    <list-modality :itemsExam="itemsExam" />
  </div>
</template>

<script>
import listModality from "../list/listModality.vue";

export default {
  name: "contentListModality",
  components: { listModality },
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
