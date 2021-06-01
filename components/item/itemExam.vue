<template>
  <a href="http://localhost:3000/takeExam">
    <card>
    <template>
      <div>
        <h1 class="text-xl uppercase font-semibold text-gray-600 mb-1">
          Exámen {{ item.title }}
        </h1>
        <p class="text-sm text-gray-600">
          {{ item.description }}
        </p>
        <div class="flex justify-between items-center">
          <h1 class="text-blue-600 font-semibold text-lg mt-2">
            {{ item.years }} - {{ item.cicle }}
          </h1>
          <h1 v-if="item.title == 'Centro PRE'" class="text-gray-600 text-sm font-light"> {{item.numExam}}{{item.numExam == 2 ? 'do':'er'}} Examen</h1>
        </div>
        <div class="mt-2">
          <h-icon
            v-for="(num, i) in Math.round(item.assessment)"
            :key="i"
            name="star"
            class="h-5 w-5 mr-2 text-yellow-300"
          />
          <h-icon
            v-for="(num, i) in 5 - Math.round(item.assessment)"
            :key="i+10"
            name="star"
            class="h-5 w-5 mr-2 text-gray-300"
          />
        </div>
      </div>
    </template>
  </card>
  </a>
</template>

<script>
import card from "../global/card.vue";

export default {
  name: "itemExam",
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