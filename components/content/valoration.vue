<template>
  <div
    class="flex items-center justify-center h-10 py-2 px-6 border border-4 border-gray-400 rounded text-gray-500 text-sm"
  >
    <button
      v-for="i of star"
      :key="i.val"
      class="outBtn"
      @click="valoration(i.val)"
    >
      <h-icon
        name="star"
        solid
        class="h-4 w-4"
        :class="i.ok ? 'text-yellow-600' : ''"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: "valoration",
  components: {},
  props: {
    value: {
      type: Number,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      star: [
        { val: 1, ok: false },
        { val: 2, ok: false },
        { val: 3, ok: false },
        { val: 4, ok: false },
        { val: 5, ok: false },
      ],
    };
  },
  computed: {
    starValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
    noValortion(){
      return this.starValue == null ? this.star.map(noStar => noStar.ok = false) : this.starValue
    }
  },
  methods: {
    valoration(i) {
      this.star = this.star.map((item) => {
        if (item.val <= i) {
          item.ok = true;
          this.starValue = i;
        } else {
          item.ok = false;
        }
        return item;
      });
    },
  },
};
</script>

<style scoped>
.outBtn {
  outline: none;
}
</style>