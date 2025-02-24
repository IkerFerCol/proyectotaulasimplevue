<script>
import axios from "axios"
export default {
  data() {
    return {
      nombre_web: "Lista de Paises",
      paises: []
    }
  },
  async mounted() {
    axios.get("http://localhost:8082/ciudads/paises").then(res => {
      this.provincias = res.data;
    })
  }
}

</script>

<template>
  <h1>{{nombre_web}}</h1>

  <table>
    <thead>
    <tr>
      <th>Id</th>
      <th>Nombre</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="pais in paises">
      <td>{{ pais.id }}</td>
      <td>{{ pais.nom }}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>
