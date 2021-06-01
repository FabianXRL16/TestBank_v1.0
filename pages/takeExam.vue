<template>
  <div>
    <back />
    <div class="sm:px-4 md:px-16">

    <contentViewExam :dataExam="dataExam" />
    </div>
  </div>
</template>

<script>
import contentViewExam from "../components/content/contentViewExam.vue";
import back from "../components/global/back.vue";

export default {
  name: "takeExam",
  components: { contentViewExam, back},
  props: [],
  data() {
    return {
      dataExam: {
        title: "Examen de Admisión de Quinto de Secundaria",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
        year: 2016,
        cicle: "I",
        duration: "3:00",
        assessment: 4.2, //cuidado, debo recibir ma´ximo un decimal
        count: 108,
      },
    };
  },
};
</script>

<style scoped>
</style>