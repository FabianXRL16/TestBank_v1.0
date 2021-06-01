<template>
  <div>
    <contentSeacrh />
    <contentModality :itemsExam="itemsExam" />
  </div>
</template>

<script>
import contentSeacrh from '../components/content/contentSearch.vue';
import contentModality from '../components/content/contentModality';

export default {
  name: "home",
  components: {contentSeacrh, contentModality},
  props: {
  },
  data() {
    return {
      itemsExam: [
        {
          title: "Ordinario",
        },
        {
          title: "Centro PRE",
        },
        {
          title: "5to",
        },
        {
          title: "Exonerados",
        },
        {
          title: "Deportistas",
        },
        {
          title: "Especiales",
        },
      ],
    };
  },
};
</script>

<style>
</style>
