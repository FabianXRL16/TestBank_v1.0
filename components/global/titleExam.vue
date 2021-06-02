<template>
  <div class="w-full flex flex-col">
    <div class="flex justify-between h-10 md:hidden">
      <button class="text-red-500 extra">Salir</button>
      <button class="text-green-500 font-semibold extra">Terminar</button>
    </div>
    <h1
      class="uppercase flex items-center justify-center md:text-xl font-medium h-8 text-gray-600 mb-2 md:mt-8"
    >
      {{ data.modality }} {{ data.year }} - {{ data.cicle }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "titleExam",
  components: {},
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  computed: {
  },
};
</script>

<script>
export default {
  name: "titleExam",
  components: {},
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  computed: {
  },
};
</script>