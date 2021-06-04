<template>
  <div
    class="sm:px-4 md:px-16 flex flex-col items-center jutify-center text-gray-700"
  >
    <div class="h-full w-full md:w-1/2">
      <div class="h-12 md:mt-16 mt-4 text-center">
        <h3 class="text-lg md:text-xl font-semibold">
          Examen Ordinario 2016 - I
        </h3>
        <h1 class="text-xl md:text-3xl font-bold mt-2">
          Kristin tu nota es:
          <small class="text-3xl text-green-500">{{
            pointTotal.toFixed(3)
          }}</small>
        </h1>
      </div>
      <div class="w-full grid grid-cols-5 pt-10">
        <div
          class="text-center text-lg"
          v-for="header of headers"
          :key="header"
        >
          <h1>{{ header }}</h1>
        </div>
      </div>
      <div class="pt-4 text-xs md:text-base">
        <div
          v-for="(result, i) of revisar()"
          :key="i"
          class="w-full grid grid-cols-5"
        >
          <div>
            <h1>{{ subjects[i][0] }}</h1>
          </div>
          <div class="text-center">
            <h1>{{ result[0] }}</h1>
          </div>
          <div class="text-center">
            <h1>{{ result[1] }}</h1>
          </div>
          <div class="text-center">
            <h1>{{ result[2] }}</h1>
          </div>
          <div class="text-right font-medium">
            <h1>{{ result[3] }}</h1>
          </div>
        </div>
      </div>
      <div class="py-4">
        <div class="flex justify-between">
          <div class="pb-2">
            <h1 class="text-lg font-semibold">
              Carrera Profesional:
              <small class="text-xl text-green-500 pl-2">Arquitectura</small>
            </h1>
          </div>
          <div>
            <h1 class="text-lg font-semibold">
              Puntaje Mínimo:
              <small
                class="text-xl pl-2"
                :class="pointTotal > 45 ? 'text-green-500' : 'text-red-500'"
                >{{ pointTotal > 45 ? `Aprobado` : `Desaprobado` }}</small
              >
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
        <router-link
          to="/home"
          class="bg-blue-600 text-white font-medium h-full w-full rounded extra"
        >
          <button
            class="py-2 bg-blue-600 text-white font-medium h-full w-full rounded extra"
          >
            Ir al Home
          </button>
        </router-link>
        <router-link
          to="exam"
          class="bg-green-500 text-white font-medium h-full w-full rounded extra"
        >
          <button
            class="py-2 bg-green-500 text-white font-medium h-full w-full rounded extra"
          >
            Rendir otro Examen
          </button>
        </router-link>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "check",
  components: {},
  props: {},
  data() {
    return {
      headers: ["Área", "Buenas", "Marcadas", "Total", "Puntaje"],
      subjects: [
        ["Raz. Verbal", 1.2, 0.25],
        ["Raz. Matemático", 1.2, 0.25],
        ["Aritmética", 1.5, 0.5],
        ["Álgebra", 1.5, 0.5],
        ["Geometría", 1.5, 0.5],
        ["Física", 1.5, 0.5],
        ["Economía", 1, 0.25],
        ["Historia", 1, 0.25],
        ["Literatura", 1, 0.25],
        ["Biología", 0.5, 0.15],
        ["Anatomía", 0.5, 0.15],
        ["Química", 0.5, 0.15],
      ],
      /*results: {
        "Raz. Matemático": { total: 15, goods: 14, wrongs: 1 },
        "Raz. Verbal": { total: 15, goods: 12, wrongs: 2 },
        Aritmética: { total: 6, goods: 6, wrongs: 0 },
        Álgebra: { total: 6, goods: 6, wrongs: 0 },
        Geometría: { total: 6, goods: 5, wrongs: 0 },
        Física: { total: 6, goods: 4, wrongs: 2 },
        Economía: { total: 6, goods: 5, wrongs: 1 },
        Historia: { total: 6, goods: 3, wrongs: 0 },
        Literatura: { total: 6, goods: 4, wrongs: 1 },
        Biología: { total: 6, goods: 2, wrongs: 1 },
        Anatomía: { total: 6, goods: 0, wrongs: 2 },
        Química: { total: 6, goods: 2, wrongs: 2 },
      },*/
      grades: [],
      pointTotal: 0,
    };
  },
  computed: {
    results() {
      return this.$store.getters["getResults"];
    },
  },
  methods: {
    revisar() {
      let grade = [];
      let point = 0;
      for (let i = 0; i < this.subjects.length; i++) {
        let pointG = this.subjects[i][1];
        let pointW = this.subjects[i][2];
        let total = this.results[this.subjects[i][0]].total;
        let goods = this.results[this.subjects[i][0]].goods;
        let wrongs = this.results[this.subjects[i][0]].wrongs;
        let mark = goods + wrongs;
        let pointT = pointG * goods - pointW * wrongs;
        grade.push([goods, mark, total, pointT.toFixed(3)]);
        point = point + pointT;
      }
      this.pointTotal = point;
      this.grades = grade;
      return grade;
    },
  },
};
</script>

<style scoped>
.extra {
  outline: none;
}
</style>>
