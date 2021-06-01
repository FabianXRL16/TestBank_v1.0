<template>
  <div
    class="sm:px-4 md:px-16 flex flex-col items-center jutify-center text-gray-700"
  >
    <div class="h-full w-full md:w-1/2">
      <div class="h-12 md:mt-16 mt-4 text-center">
        <h3 class="text-lg md:text-xl font-semibold">
          Examen Ordinario 2016 - I
        </h3>
        <h1 class="text-xl md:text-3xl font-bold">
          Kristin tu nota es:
          <small class="text-2xl text-green-500">198.50</small>
        </h1>
      </div>
      <div class="pt-4 text-xs md:text-base">
        <div class="grid grid-cols-5 md:px-8 my-4">
          <div class="text-center" v-for="header of headers" :key="header">
            <h1>{{ header }}</h1>
          </div>
        </div>
        <div
          class="md:border md:border-blue-600 md:border-1 rounded grid grid-cols-5 py-2 md:py-4 md:px-8"
        >
          <div>
            <div v-for="subject of subjects" :key="subject">{{ subject }}</div>
          </div>
          <div>
            <div class="text-center" v-for="good of answers" :key="good">
              {{ good[1] }}
            </div>
          </div>
          <div>
            <div class="text-center" v-for="bad of answers" :key="bad">
              {{ bad[2] }}
            </div>
          </div>
          <div>
            <div class="text-center" v-for="total of answers" :key="total">
              {{ total[0] }}
            </div>
          </div>
          <div>
            <div
              class="text-right pr-10"
              v-for="degree of answers"
              :key="degree"
            >
              <!--{{ degree.toFixed(2) }}-->a
            </div>
          </div>
        </div>
      </div>
      <div class="py-4">
        <div class="flex justify-between">
          <div class="pb-2">
            <h1 class="text-lg font-semibold">
              Carrera Profesional:
              <small class="text-xl text-green-500">Administración</small>
            </h1>
          </div>
          <div>
            <h1 class="text-lg font-semibold">
              Puntaje Mínimo:
              <small class="text-xl text-green-500">Aprobado</small>
            </h1>
          </div>
        </div>
        <div class="flex justify-between">
          <button class="text-blue-600 font-medium extra">
            Descargar Examen<h-icon
              name="document-download"
              class="h-4 w-4 ml-2"
            />
          </button>
          <button class="text-green-500 font-medium extra">
            Descargar Nota<h-icon name="download" class="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
      <div class="flex justify-beteewn w-full space-x-4">
        <button
          class="py-2 bg-blue-600 text-white font-medium h-full w-full rounded extra"
        >
          Ir al Home
        </button>
        <button
          class="py-2 bg-green-500 text-white font-medium h-full w-full rounded extra"
        >
          Rendir otro Examen
        </button>
      </div>
    </div>
    <div>
      {{result}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Check",
  components: {},
  props: {},
  data() {
    return {
      headers: ["Área", "Buenas", "Marcadas", "Total", "Puntaje"],
      subjects: [
        "Raz. Verbal",
        "Raz. Matemático",
        "Aritmética",
        "Álgebra",
        "Geometría",
        "Física",
        "Economía",
        "Historia",
        "Literatura",
        "Biología",
        "Anatomía",
        "Química",
      ],
      answers: [
        //[Total, Buenas, Malas]
        [15, 11, 2],
        [15, 13, 1],
        [6, 2, 1],
        [6, 6, 0],
        [6, 5, 1],
        [6, 2, 3],
        [6, 4, 0],
        [6, 5, 1],
        [6, 6, 0],
        [6, 0, 0],
        [6, 1, 3],
        [6, 4, 1],
      ],
      resultAnswer: {
        "Raz. Matemático": {
          goods: 0,
          total: 0,
          wrongs: 0,
        },
      },
    };
  },
  computed: {
    ...mapGetters(["result"]),
  },
  methods: {
    calcularPoint() {
      this.result
    },
  },
};
</script>

<style scoped>
.extra {
  outline: none;
}
</style>>
