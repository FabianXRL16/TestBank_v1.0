<template>
  <div class="w-full px-4 sm:px-8 md:px-40 flex flex-col">
    <div class="md:flex md:justify-between">
      <input
        v-if="ok"
        type="search"
        name="search"
        id=""
        placeholder="Buscar..."
        class="w-full md:h-12 h-10 bg-transparent border-blue-600 border-b-2 mb-4 md:mb-0 md:text-xl text-gray-600 outline-none"
      />
      <div
        v-else
        class="w-full md:h-12 h-10 border-blue-600 border-b-2 mb-4 md:mb-0 flex space-x-2 sm:space-x-4"
      >
        <div
          v-if="modality"
          class="flex space-x-2 sm:space-x-4 items-center border-2 border-blue-300 bg-blue-100 mb-2 rounded px-4 text-gray-500"
        >
          <h1>{{ modality }}</h1>
          <button @click="modality = null" class="extra">
            <h-icon name="x" class="h-4 w-4 text-red-600" />
          </button>
        </div>
        <div
          v-if="cicle"
          class="flex space-x-2 sm:space-x-4 items-center border-2 border-blue-300 bg-blue-100 mb-2 rounded px-4 text-gray-500"
        >
          <h1>{{ cicle }}</h1>
          <button @click="cicle = null" class="extra">
            <h-icon name="x" class="h-4 w-4 text-red-600" />
          </button>
        </div>
        <div
          v-if="year"
          class="flex space-x-2 sm:space-x-4 items-center border-2 border-blue-300 bg-blue-100 mb-2 rounded px-4 text-gray-500"
        >
          <h1>{{ year }}</h1>
          <button @click="year = null" class="extra">
            <h-icon name="x" class="h-4 w-4 text-red-600" />
          </button>
        </div>
        <div
          v-if="valoration"
          class="flex space-x-2 sm:space-x-4 items-center border-2 border-blue-300 bg-blue-100 mb-2 rounded px-4 text-gray-500"
        >
          <h1>
            {{ valoration }}
            <h-icon name="star" solid class="h-4 w-4" />
          </h1>
          <button @click="valoration = null" class="extra">
            <h-icon name="x" class="h-4 w-4 text-red-600" />
          </button>
        </div>
      </div>
      <div
        class="flex text-white space-x-2 sm:space-x-4 md:space-x-1 text-lg rounded"
      >
        <button
          @click="cancelFilters"
          class="md:mx-4 flex justify-center items-center extra rounded w-full md:w-36 md:h-12 h-10"
          :class="ok ? 'bg-green-500' : 'bg-blue-400'"
        >
          {{ ok ? "Filtrar" : "Cancelar" }}
          <h-icon :name="ok ? 'adjustments' : 'x'" class="h-5 w-5 ml-2" />
        </button>
        <a
          href="http://localhost:3000/results"
          class="extra bg-blue-600 text-lg rounded flex justify-center items-center extra w-full md:w-36 md:h-12 h-10"
        >
          Buscar
          <h-icon name="search" class="h-5 w-5 ml-2" />
        </a>
      </div>
    </div>
    <div
      v-if="!ok"
      class="h-auto w-full pt-4 md:pt-8 md:flex md:justify-between grid grid-cols-2 grid-row-3 sm:gap-4 gap-x-2 gap-y-4"
    >
      <tbselect v-model="modality" :options="modalities" label="Modalidad" />
      <tbselect v-model="cicle" :options="cicles" label="Ciclo" />
      <input-year v-model="year" label="Año" />
      <valoration v-model="valoration" />
      <button
        class="extra bg-gray-400 text-white rounded md:px-24 col-span-2 py-2"
        @click="cleanFilters"
      >
        Limpiar Filtros
        <h-icon name="refresh" class="h-5 w-5 ml-2" />
      </button>
    </div>
  </div>
</template>

<script>
import btn from "../buttons/btn.vue";
import tbselect from "../global/tbselect.vue";
import inputYear from "../global/inputYear.vue";
import valoration from "../content/valoration.vue";

export default {
  name: "contentInputSeacrh",
  components: { btn, tbselect, inputYear, valoration },
  props: {},
  data() {
    return {
      ok: true,
      modalities: [
        "Ordinario",
        "Centro PRE",
        "5to",
        "Exonerdos",
        "Casos Especiales",
        "Vict. Terrorismo",
      ],
      cicles: ["I", "II", "III"],
      year: null,
      modality: null,
      cicle: null,
      valoration: null,
    };
  },
  methods: {
    cleanFilters() {
      (this.year = null),
      (this.modality = null),
      (this.cicle = null),
      (this.valoration = null);
    },
    cancelFilters() {
      this.ok = !this.ok,
      this.cleanFilters()
    },
  },
};
</script>

<style scoped>
.extra {
  outline: none;
}
</style>
