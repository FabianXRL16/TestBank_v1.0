<template>
  <div class="flex flex-col md:flex-row w-full px-0 sm:px-8 md:px-20">
    <div class="w-full md:w-1/4 flex justify-center items-center md:mr-4">
      <h-icon name="academic-cap" class="h-28 w-28 sm:h-40 sm:w-40 md:h-full md:w-full text-red-600" />
    </div>
    <div class="w-full md:w-3/4">
      <h1
        class="uppercase text-xl sm:text-2xl md:text-4xl mb-1 sm:mb-4 text-gray-500 font-semibold"
      >
        {{ dataExam.title }}
      </h1>
      <div class="flex mb-1 sm:mb-4 justify-start">
        <div
          class="rounded-full bg-gradient-to-t from-yellow-500 to-yellow-300 flex justify-center items-center w-12 h-12 mr-4"
        >
          <div
            class="rounded-full bg-white flex justify-center items-center w-10 h-10"
          >
            <h1 class="text-sm font-semibold text-yellow-500">
              {{ dataExam.assessment * 20 }}%
            </h1>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-start pl-4 border border-gray-300 border-t-0 border-b-0 border-l-1 border-r-0"
        >
          <div class="flex">
              <h-icon
            v-for="(num, i) in Math.round(dataExam.assessment)"
            :key="i"
            name="star"
            class="h-5 w-5 mr-2 text-yellow-300"
          />
          <h-icon
            v-for="(num, i) in 5 - Math.round(dataExam.assessment)"
            :key="i+10"
            name="star"
            class="h-5 w-5 mr-2 text-gray-300"
          />
          </div>
          <h1 class="text-xs text-gray-600 mt-1">
            Promedio {{ dataExam.assessment }} de 5
          </h1>
        </div>
      </div>
      <h1 class="mb-1 text-gray-500">{{ dataExam.description }}</h1>
      <div class="flex items-center mb-2 sm:mb-4 sm:justify-start justify-between">
        <h1 class="text-green-500 font-medium text-xl">
          {{ dataExam.year }} - {{ dataExam.cicle }}
        </h1>
        <h2
          class="text-gray-500 md:ml-4 md:mr-auto sm:mx-auto sm:font-light hidden sm:block"
        >
          Duración {{ dataExam.duration }} horas
        </h2>
        <h-icon
          name="download"
          class="h-5 w-5 sm:h-8 sm:w-8 ml-2 text-blue-500"
        />
      </div>
      <h2
        class="text-gray-500 font-light sm:hidden block mb-2"
      >
        Duración {{ dataExam.duration }} horas
      </h2>
      <div class="flex mb-8 items-center">
        <h-icon name="user-group" class="h-7 w-7 mr-2 text-black" />
        <h1 class="font-semibold leading-none">
          {{ dataExam.count }} veces se ha sido dado este examen
        </h1>
      </div>
      <a class="w-full" href="http://localhost:3000/test">
        <btn class="bg-blue-600 w-full text-white" :title="'Empezar'" />
      </a>
    </div>
  </div>
</template>

<script>
import btn from "../buttons/btn.vue";

export default {
  name: "contentDataViewExam",
  components: { btn },
  props: {
    dataExam: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      ok: false,
    };
  },
};
</script>

<style scoped>
</style>
