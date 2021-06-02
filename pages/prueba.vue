<template>
  <div class="h-screen flex divide-x divide-gray-300">
    <div class="h-full flex flex-col justify-between w-full md:w-2/3 md:pr-8">
      <div class="w-full">
        <title-exam :data="data" />
        <pregunta
          @getScore="saveScore"
          :question="questions[answer]"
          :count="data.countQuestions"
        />
      </div>
      {{ answer}}
      <controls-question @changeAnswer="changeQuestions" />
    </div>
    <question-book
      @getAnswer="updateQuestion"
      :questions="data.countQuestions"
      class="ocultar h-full"
    />
  </div>
</template>

<script>
import exams from "../api/exams.json";
import titleExam from "../components/global/titleExam.vue";
import pregunta from "../components/content/pregunta.vue";
import questionBook from "../components/global/questionBook.vue";
import controlsQuestion from "../components/global/controlsQuestion.vue";

export default {
  name: "Prueba",
  components: { titleExam, pregunta, questionBook, controlsQuestion },
  props: {},
  data() {
    return {
      answer: 0,
      score: {},
      nota:{}
    };
  },
  computed: {
    questions() {
      return exams.questions;
    },
    data() {
      return exams.data;
    },
  },
  methods: {
    updateQuestion(pos) {
      this.answer = pos;
    },
    changeQuestions(e){
      if (!e && this.answer == 0) this.answer
      e ? this.answer =+ 1 : this.answer =-1
    },
    saveScore(alternative, question) {
      this.score[`question${question}`] = alternative;
    },
    totalQuestions() {
      return this.data.countQuestions;
    },
    check() {
      const result = {};
      for (let i = 0; i < this.totalQuestions(); i++) {
        const question = this.questions[i];
        if (!result[question.area]) {
          result[question.area] = {
            total: 0,
            goods: 0,
            wrongs: 0,
          };
        }
        result[question.area].total++;
        if (this.score[`question${i}`] == undefined) continue;
        this.score[`question${i}`] == this.questions[i].correct
          ? result[question.area].goods++
          : result[question.area].wrongs++;
      }
      this.nota = result
      console.log(result)
      return result;
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
