<template>
  <div class="sm:px-4 md:px-16">
    <div class="flex justify-between h-10 md:hidden">
      <button class="text-red-500 extra">Salir</button>
      <button class="text-green-500 font-semibold extra">Terminar</button>
    </div>
    <h1
      class="uppercase flex items-center justify-center md:text-xl font-medium h-8 text-gray-600 mb-2 md:mt-8"
    >
      Examen de 5to 2016 - i
    </h1>
    <div class="flex justify-between flex items-center justify-center mb-4">
      <div class="flex">
        <h1 class="text-blue-500 font-semibold">{{ answer + 1 }}</h1>
        <h1>/90</h1>
      </div>
      <h1 class="uppercase text-gray-600">{{ question.area }}</h1>
    </div>
    <div class="scroll pr-1 w-full">
      <div
        class="text-gray-800"
        :class="question.typeQuestion == 'graph' ? '' : 'mb-8'"
      >
        {{ question.text }}
      </div>
      <div
        v-if="question.typeQuestion == 'graph'"
        class="w-full flex justify-center"
      >
        <img
          src="../../assets/EXAM/SVG/question5.svg"
          alt="Grafico"
          class="w-1/3"
        />
      </div>
      <div
        class="text-gray-800"
        v-if="question.typeQuestion == 'graph'"
      >
        {{ question.text2 }}
      </div>
      <div
        class="grid md:grid-cols-2 grid-cols-1 md:grid-rows-3 gap-x-6 gap-y-4"
      >
        <button
          @click="answerTest(question.id -1, i)"
          v-for="(alternative, i) of question.alternatives"
          :key="i"
          class="bg-white text-gray-700 font-medium px-4 py-2 rounded w-auto shadow-md border border-blue-600 hover:bg-blue-600 hover:text-white extra focus:bg-blue-600 focus:text-white"
        >
          {{ letter[i] }}. {{ alternative }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contentQuestion",
  components: {},
  props: {
    question: {
      required: true,
      type: Object,
    },
    answer: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {
      letter: ["A", "B", "C", "D", "E"],
    };
  },
  methods:{
    answerTest(answer, alternative){
      this.$emit('getAnswer', answer, alternative)
    }
  },
};
</script>

<style scoped>
.extra {
  outline: none;
}
.scroll {
  overflow: scroll;
  margin-bottom: 20px;
  height: 100%;
}
.scroll::-webkit-scrollbar {
  width: 5px;
}
.scroll::-webkit-scrollbar-thumb {
  background: #2563eb;
  border-radius: 5px;
}
</style>>
