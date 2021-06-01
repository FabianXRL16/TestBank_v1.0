<template>
  <div class="h-screen flex">
    <div class="h-full flex flex-col justify-between w-full md:w-2/3">
      <div>contentQuestion</div>
      <div>controlsQuestion</div>
    </div>
    <div class="ocultar h-full">
      questionBook
    </div>
  </div>
</template>

<script>
import exams from "../api/exams.json";
export default {
  name: "Prueba",
  components: {},
  props: {},
  data() {
    return {
      exam: [],
    };
  },
  computed: {
    items() {
      return exams.questions.map((item) => {
        this.exam.push(item)
        return item;
      });
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .ocultar {
    display: none;
  }
}
</style>>
