<template>
  <div class="relative w-auto flex flex-col items-center">
    <button
      @click="open = !open"
      class="outBtn w-full border border-4 border-gray-400 h-10 py-2 px-3 sm:px-6 rounded text-gray-500 text-sm"
    >
      {{ label }}
      <h-icon
        :name="open ? 'chevron-up' : 'chevron-down'"
        class="h-4 w-4 ml-2"
      />
    </button>
    <div
      v-if="open"
      class="grid grid-cols-1 w-full shadow absolute rounded mt-12"
    >
      <button
        @click="optionValue(option)"
        v-for="option of options"
        :key="option"
        class="outBtn border border-gray-200 border-t-0 border-b-1 border-l-0 border-r-0 py-2 px-2 sm:px-4 rounded text-sm font-light transition duration-500 ease-in-out bg-white hover:bg-gray-200 hover:text-black transform hover:-translate-y-1 hover:scale-110"
      >
        {{ option }}
      </button>
    </div>
  </div>
</template>

<script>
import btn from "../buttons/btn.vue";

export default {
  name: "tbselect",
  components: { btn },
  props: {
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value:{
      type: String,
      require: false,
      default: null
    }
  },
  data() {
    return {open: false};
  },
  computed:{
    optionVal: {
      get(){
        return this.value
      },
      set(value){
        this.$emit("input",value)
      }
    },
    text(){
      return this.optionVal == null ? "Todos" : this.optionVal
    }
  },
  methods:{
    optionValue(option){
      this.open =! this.open
      this.optionVal = option
    }
  }
};
</script>

<style scoped>
.outBtn {
  outline: none;
}
</style>