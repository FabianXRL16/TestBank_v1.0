<template>
  <div class="flex flex-col justify-center px-4">
    <h1 class="uppercase font-medium pb-10 text-xl text-white text-center">
      Recuperar Cuenta
    </h1>
    <p class="text-white md:text-gray-100 text-sm mb-4">
      ¡Hey! no te preocupes, te ayudaremos a recuperar tu cuenta.
    </p>
    <input
      class="w-full md:h-12 h-10 bg-transparent border border-white border-l-0 border-r-0 border-t-0 border-b-2 outline-none mb-6 text-white placeholder-white font-medium pb-3"
      type="text"
      name="Correo"
      v-model="email"
      placeholder="Correo"
      :rules="[rules.required, rules.email]"
    />
    <button class="bg-blue-600 text-white w-full py-3 rounded extra mt-10">
      Enviar
    </button>
    <div class="flex justify-center">
      <a
        href="http://localhost:3000/login"
        class="text-white mt-16 text-lg text-white font-bold"
        >Regresar</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "formRecovery",
  components: {},
  props: {},
  data() {
    return {
      email: "",
      rules: {
        required: (value) => !!value || "Campo obligatorio",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<script>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Email inválido";
        },
      },
    };
  },
};
</script>

<style scoped>
.extra {
  outline: none;
}
</style>