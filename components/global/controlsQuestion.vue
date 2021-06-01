<template>
  <div class="md:flex md:justify-center">
    <div
      class="flex justify-between bg-blue-600 md:w-1/2 md:rounded md:mb-2 md:shadow-md rounded-t-lg "
    >
      <button
        class="w-1/3 md:w-1/2 border border-blue-700 border-t-0 border-b-0 border-l-1 border-r-1 py-2 extra rounded-tl-lg md:rounded hover:bg-blue-700"
      >
        <h-icon name="chevron-left" class="h-5 w-5 text-white" />
      </button>
      <button
        class="w-1/3 border border-blue-700 border-t-0 border-b-0 border-l-1 border-r-1 py-2 extra md:rounded hover:bg-blue-700 md:hidden"
      >
        <h-icon name="table" class="h-5 w-5 text-white" />
      </button>
      <button
        class="w-1/3 md:w-1/2 border border-blue-700 border-t-0 border-b-0 border-l-1 border-r-1 py-2 extra rounded-tr-lg md:rounded hover:bg-blue-700"
      >
        <h-icon name="chevron-right" class="h-5 w-5 text-white" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "controlsQuestion",
  components: {},
  props: {},
  data() {
    return {
      questions: 120,
    };
  },
};
</script>

<style scoped>
.extra {
  outline: none;
}
</style>>
