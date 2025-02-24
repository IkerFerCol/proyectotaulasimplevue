<script>
import axios from "axios"
export default {
  data() {
    return {
      nombre_web: "Lista de Provincias",
      provincias: []

    }
  },
  async mounted() {
    axios.get("http://localhost:8082/ciudads/provincias").then(res => {
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
    <tr v-for="provincia in provincias">
      <td>{{ provincia.id }}</td>
      <td>{{ provincia.nom }}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>
