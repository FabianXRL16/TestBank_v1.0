<template>
  <div>
    <div class="flex justify-between flex items-center justify-center mb-4">
      <div class="flex">
        <h1 class="text-blue-500 font-semibold">{{ question.id }}</h1>
        <h1>/{{ count }}</h1>
      </div>
      <h1 class="uppercase text-gray-600">{{ question.area }}</h1>
    </div>
    <div>
      <h1>{{ question.text }}</h1>
      <div v-if="question.typeQuestion == 'graph'">
        <img class="w-1/2" :src="question.img" :alt="`Figure ${question.id}`" />
      </div>
      <h1>{{ question.text2 }}</h1>
    </div>
    <div
      class="grid md:grid-cols-2 grid-cols-1 md:grid-rows-3 gap-x-6 gap-y-4 py-10"
    >
      <button
        class="bg-white text-gray-700 font-medium px-4 py-2 rounded w-auto shadow-md border border-blue-600 hover:bg-blue-600 hover:text-white extra focus:bg-blue-600 focus:text-white"
        v-for="(alternative, i) of question.alternatives"
        :key="alternative"
        @click="sendScore(i)"
      >
        {{ letter[i] }}. {{ alternative }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "pregunta",
  components: {},
  props: {
    question: {
      type: Object,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    value:{
      type: Array,
      require: false,
      default: null
    }
  },
  data() {
    return {
      letter: ["A", "B", "C", "D", "E"],
    };
  },
  methods: {
    sendScore(alternative){
      this.$emit('getScore',alternative,this.question.id)
    }
  }
};
</script>

<style scoped>
.extra {
  outline: none;
}
</style>>