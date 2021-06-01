<template>
  <div class="w-1/3">
    <div class="h-full border-l border-gray-200 px-8 contentt">
      <div class="flex items-center justify-center w-full">
        <h1 class="text-xl text-gray-600 font-medium">Cartilla de Preguntas</h1>
      </div>
      <div class="scroll pr-1 w-full">
        <button
          v-for="i in questions"
          :key="i"
          @click="toAnswer(i - 1)"
          class="h-6 w-1/6 m-1 rounded border border-blue-600 text-gray-700 hover:bg-blue-600 hover:text-white extra focus:bg-blue-600 focus:text-white focus:shadow"
        >
          {{ i }}
        </button>
      </div>
      <div class="flex space-x-4 mb-2 w-full">
        <a href="http://localhost:3000/home" class="bg-red-500 text-white font-medium w-full rounded flex items-center">
          <button
            class="bg-red-500 text-white font-medium w-full rounded extra"
          >
            Cancelar
          </button>
        </a>
        <button
          class="bg-green-500 text-white font-medium h-full w-full rounded extra"
        >
          Terminar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "questionBook",
  components: {},
  props: {
    questions: {
      required: true,
      type: Number,
    },
    value: {
      type: Number,
      required: false,
      default: null,
    },
  },
  data() {
    return {};
  },
  computed: {
    answer: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    toAnswer(i) {
      this.answer = i;
    },
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
.contentt {
  display: grid;
  grid-template-rows: 90px 1fr 50px;
}
</style>
