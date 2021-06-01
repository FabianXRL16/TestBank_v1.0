<template>
  <!--cambiar div por form (no olvidar)-->
  <div class="flex flex-col justify-center items-center px-4">
    <h1 class="uppercase font-medium pb-10 text-xl text-white">
      {{ logeado ? "Iniciar Sesión" : "Regístrate" }}
    </h1>
    <div class="relative w-full">
      <input
        class="w-full md:h-12 h-10 bg-transparent border border-white border-l-0 border-r-0 border-t-0 border-b-2 outline-none mb-6 text-white placeholder-white font-medium pb-3"
        type="text"
        name="Correo"
        v-model="email"
        placeholder="Correo"
        :rules="[rules.required, rules.email]"
      />
      <input
        class="w-full md:h-12 h-10 bg-transparent border border-white border-l-0 border-r-0 border-t-0 border-b-2 outline-none mb-6 text-white placeholder-white font-medium pb-3 pr-6"
        :type="ok ? 'text' : 'password'"
        name="Contraseña"
        v-model="password"
        placeholder="Contraseña"
        :rules="[rules.required, rules.min]"
        @paste.prevent
        @keyup.space="blankspace"
      />
      <button class="absolute -ml-5 md:mt-2 mt-1 extra" @click="ok = !ok">
        <h-icon :name="ok ? 'eye-off' : 'eye'" class="h-5 w-5 text-white" />
      </button>
    </div>
    <div class="w-full" v-if="!logeado">
      <input
        class="w-full md:h-12 h-10 bg-transparent border border-white border-l-0 border-r-0 border-t-0 border-b-2 outline-none text-white placeholder-white font-medium pb-3 pr-6"
        :type="ok ? 'text' : 'password'"
        name="Contraseña"
        v-model="repeatPassword"
        placeholder="Repetir contraseña"
        :rules="[rules.required, rules.min]"
        @paste.prevent
        @keyup.space="blankspace"
      />
    </div>
    <button class="bg-blue-600 text-white w-full py-3 rounded extra mt-10">
      {{ logeado ? "Ingresar" : "Registrarse" }}
    </button>
    <a
      v-if="!logeado"
      href="http://localhost:3000/recovery"
      class="text-white ml-auto mt-4 text-sm hover:text-blue-700"
      >Olvidé mi contraseña</a>
    <button
      class="mt-8 flex flex-col justify-center items-center extra"
    >
      <img
        class="h-8 w-8"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
        alt=""
      />
      <h1 class="text-blue-700 font-medium">{{logeado?"Ingresar con Google":"Iniciar con Google"}}</h1>
    </button>
    <button
      class="mt-10 text-lg text-white font-bold extra"
      @click="logeado = !logeado"
    >
      {{ logeado ? "Registrarme" : "Ya tengo cuenta" }}
    </button>
  </div>
</template>

<script>
export default {
  name: "formSession",
  components: {},
  props: {},
  data() {
    return {
      logeado: false,
      ok: false,
      email: "",
      password: "",
      repeatPassword: "",
      rules: {
        required: (value) => !!value || "Campo obligatorio",
        min: (v) => v.length >= 8 || "Mínimo 8 caracteres",
        equalPass: (value) => {
          const number = /[0-9]/;
          return number.test(value) || "Falta usar un número";
        },
        minus: (value) => {
          const minus = /[a-z]/;
          return mayus.test(value) || "Falta una mayúscula";
        },
        speccial: (value) => {
          const especial = /[?!¿¡&%$'-_@#*."{}]/;
          return speccial.test(value) || "Falta usar un carácter especial";
        },
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Email inválido";
        },
      },
    };
  },
  methods:{
    blankspace(){
      this.password = this.password.trim()
      this.repeatPassword = this.repeatPassword.trim()
    }
  }
};
</script>

<style scoped>
.extra {
  outline: none;
}
</style>