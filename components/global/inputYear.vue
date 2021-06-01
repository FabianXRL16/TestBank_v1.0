<template>
  <div
    class="flex items-center justify-center h-10 py-2 px-3 md:px-6 border border-4 border-gray-400 rounded text-gray-500 text-sm"
  >
    <h1 class="mr-1 sm:mr-2">{{ label }}</h1>
    <button
      class="outBtn mr-1 sm:mr-2"
      :class="num == 2014 ? 'text-gray-300':''"
      @click="decrement"
    >
      <h-icon name="chevron-left" class="h-4 w-4" />
    </button>
    <h1 class="mr-1 sm:mr-2 font-medium tracking-widest w-12 text-center">
      {{ text }}
    </h1>
    <button
      class="outBtn"
      :class="num == null ? 'text-gray-300' : ''"
      @click="increment"
    >
      <h-icon name="chevron-right" class="h-4 w-4" />
    </button>
  </div>
</template>

<script>
import btn from "../buttons/btn.vue";

export default {
  name: "contentInputSeacrh",
  components: { btn },
  props: {
    label: {
      type: String,
      required: true,
    },
    value:{
      type: Number,
      required: false,
      default: null,
    }
  },
  data() {
    return {
      max: new Date().getFullYear()
    };
  },
  computed:{
    num : {
      get(){
        return this.value
      },
      set(value){
        if(value<2014) return
        if(value>2021){
          this.$emit("input",null)
          return
        }
        this.$emit("input",value)
      }
    },
    text(){
      return this.num == null ? "Todos" : this.num
    }
  },
  methods:{
    increment(){
      if(this.num == null) return
      this.num++
    },
    decrement(){
      if(this.num == null){
        this.num = this.max
        return
      }
      this.num--
    }
  }
};
</script>

<style scoped>
.outBtn {
  outline: none;
}
</style>