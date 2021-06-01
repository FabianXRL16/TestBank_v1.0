<template>
  <div>
    <div
      class="h-auto grid grid-flow-rows md:grid-flow-rows md:grid-cols-3 md:pb-16 pb-4 gap-y-6 sm:gap-y-4 md:gap-y-8 md:gap-x-16 gap-x-4"
    >
      <itemExam
        v-for="(item, i) of itemsExam"
        :key="i"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import itemExam from "../item/itemExam.vue";

export default {
  name: "contentListExam",
  components: { itemExam },
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