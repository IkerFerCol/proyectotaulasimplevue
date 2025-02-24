<script>
import Ciudades from "@/components/Ciudades.vue";
import Provincias from "@/components/Provincias.vue";
import Paises from "@/components/Paises.vue";

export default {
  name: 'App',
  components: {Ciudades, Provincias, Paises},
}
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Ciudades</router-link>
      <router-link to="/Provincias">Provincias</router-link>
      <router-link to="/Paises">Paises</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
