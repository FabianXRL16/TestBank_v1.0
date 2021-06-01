<template>
  <div
    class="md:shadow-md md:rounded md:py-12 md:px-4 md:bg-white md:bg-opacity-10 w-full sm:w-auto"
  >
    <form-session v-if="type==='login'" class="z-10" />
    <form-recovery v-if="type==='recovery'" class="z-10" />
  </div>
</template>

<script>
import formSession from "../forms/formSession.vue";
import formRecovery from "../forms/formRecovery.vue";

export default {
  name: "loginRegister",
  components: { formSession, formRecovery },
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>