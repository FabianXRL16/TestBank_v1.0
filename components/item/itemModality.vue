<template>
  <a href="http://localhost:3000/exam">
    <card>
    <template>
      <div class="w-auto h-28 sm:h-auto flex flex-col justify-center">
        <div class="flex justify-center">
          <img
            class="h-12 sm:h-20 md:h-20 w-auto"
            src="../../assets/Icons/principal.svg"
            alt=""
          />
        </div>
        <div class="flex justify-center w-full">
          <h1 class="text-blue-600 text-base font-medium mt-2 md:mt-4">
            {{ item.title }}
          </h1>
        </div>
      </div>
    </template>
  </card>
  </a>
</template>

<script>
import card from "../global/card.vue";

export default {
  name: "itemModality",
  components: { card },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>