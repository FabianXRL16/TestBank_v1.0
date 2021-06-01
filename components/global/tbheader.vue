<template>
  <!--sin loguearse-->
  <!--
  <div
    class="bg-blue-600 w-full md:h-14 h-12 flex items-center fixed shadow-lg"
  >
    <img class="w-6 h-6 md:w-8 md:h-8" src="../../assets/IMG/WhiteLogoTestBank.svg" alt="" />
    <h1 class="text-white text-xl ml-2">TestBank</h1>
  </div>-->
  <!--logueado global-->
  <!--<div
    class="bg-blue-600 w-full md:h-14 h-12 flex items-center justify-between fixed shadow-lg"
  >
    <div class="flex items-center">
      <img class="w-6 h-6 md:w-8 md:h-8" src="../../assets/IMG/WhiteLogoTestBank.svg" alt="" />
      <h1 class="text-white text-xl ml-2 hidden sm:block">TestBank</h1>
    </div>
    <div class="flex items-center">
      <h1 class="text-white text-xl mr-2">Kristin</h1>
      <img class="w-8 h-8 md:w-10 md:h-10 rounded-full border-double border-4 border-white"  src="../../assets//IMG/kristin.jpg" alt="" />
    </div>
  </div>-->
  <div
    class="bg-blue-600 w-full md:h-14 h-12 flex items-center justify-between fixed shadow-lg"
  >
    <a href="http://localhost:3000/home" class="flex items-center extra">
      <img
        class="w-6 h-6 md:w-8 md:h-8"
        title="Logo TestBank"
        src="../../assets/IMG/WhiteLogoTestBank.svg"
        alt=""
      />
      <h1 class="text-white text-xl ml-2 hidden sm:block">TestBank</h1>
    </a>
    <div class="relative w-40 flex flex-col items-end">
      <div class="flex items-center">
        <h1 class="text-white text-xl mr-2">Kristin</h1>
        <button class="extra rounded-full" @click="open = !open">
          <img
          title="Kristin"
          class="w-8 h-8 md:w-10 md:h-10 rounded-full border-double border-4 border-white"
          src="../../assets//IMG/kristin.jpg"
          alt=""
        />
        </button>
      </div>
      <div v-if="open" class="absolute inset-y-0 right-0 mt-12 text-blue-600 flex flex-col items-end pt-2 md:pt-4 space-y-2 md:space-y-4">
        <div class="flex items-center">
          <h1 class="w-full">Mis Exámenes</h1>
          <h-icon name="bookmark-alt" class="h-6 w-6 md:h-7 h-6 w-6 md:w-7 ml-2 md:ml-4" />
        </div>
        <div class="flex items-center">
          <h1 class="w-full ml-auto">Cuenta</h1>
          <h-icon name="user" class="h-6 w-6 md:h-7 h-6 w-6 md:w-7 ml-2 md:ml-4" />
        </div>
        <div class="flex items-center">
          <h1 class="w-full ml-auto">Practicar</h1>
          <h-icon name="play" class="h-6 w-6 md:h-7 h-6 w-6 md:w-7 ml-2 md:ml-4" />
        </div>
        <div class="flex items-center">
          <h1 class="w-full ml-auto">Plan</h1>
          <h-icon name="chart-square-bar" class="h-6 w-6 md:h-7 h-6 w-6 md:w-7 ml-2 md:ml-4" />
        </div>
        <div class="flex items-center">
          <h1 class="w-full">Cerrar Sesión</h1>
          <h-icon name="logout" class="h-6 w-6 md:h-7 h-6 w-6 md:w-7 ml-2 md:ml-4" />
        </div>
      </div>
    </div>
  </div>
  <!--logueado-->
  <!--exam-->
  
    <!--<div
    class="bg-blue-600 w-full md:h-14 h-12 flex items-center justify-between fixed shadow-lg"
  >
    <div class="flex items-center">
      <img class="w-6 h-6 md:w-8 md:h-8" src="../../assets/IMG/WhiteLogoTestBank.svg" alt="" />
      <h1 class="text-white text-xl ml-2 hidden sm:block">TestBank</h1>
      <h1 class="text-yellow-400 font-bold text-xl md:text-2xl  tracking-widest ml-2 block sm:hidden">
        02:56:11
      </h1>
    </div>
    <div class="hidden sm:block">
      <h1 class="text-yellow-400 font-bold text-xl md:text-2xl tracking-widest">
        02:56:11
      </h1>
    </div>
    <div class="flex items-center">
      <h1 class="text-white text-xl mr-2">Kristin</h1>
      <img class="w-8 h-8 md:w-10 md:h-10 rounded-full border-double border-4 border-white"  src="../../assets//IMG/kristin.jpg" alt="" />
    </div>
  </div>-->
</template>

<script>
export default {
  name: "tbheader",
  props: [],
  data() {
    return {
      open: false,
    };
  },
  methods:{
  }
};
</script>

<style scoped>
.extra {
  outline: none;
}
</style>
