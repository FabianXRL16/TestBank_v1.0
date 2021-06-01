<template>
  <div class="w-full flex justify-center items-center  shadow-md rounded-md border border-l-0 border-r-0 border-t-0 border-b-4 md:border-b-8 border-blue-400">
    <div class="w-auto flex flex-col justify-center">
      <div class="flex justify-center">
        <img class="h-20 w-auto" src="../../assets/IMG/WhiteLogoTestBank.svg" alt="" />
      </div>
      <div class="flex justify-center">
        <h1 class="text-blue-600 text-base font-medium mt-2">
        {{ itemExam.title }}
      </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "examCard",
  props: {
    itemExam: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.font {
  background-image: url("../../assets/IMG/logoTestBank.png");
}
</style>