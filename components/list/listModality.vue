<template>
  <div>
    <div
      class="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-y-4 md:gap-y-10 md:gap-x-16 gap-x-4 md:pt-8"
    >
      <itemModality v-for="(item, i) of itemsExam" :key="i" :item="item"/>
    </div>
  </div>
</template>

<script>
import itemModality from "../item/itemModality.vue";

export default {
  name: "listModality",
  components: { itemModality },
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