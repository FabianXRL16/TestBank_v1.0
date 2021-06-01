<template>
  <div class="h-screen bg-gradient-to-t from-green-300 via-blue-400 to-blue-800 flex items-center justify-center">
    <login-register :type="'recovery'" />
  </div>
</template>

<script>
import loginRegister from "../components/global/loginRegister.vue";

export default {
  name: "login",
  components: {loginRegister},
  props: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
