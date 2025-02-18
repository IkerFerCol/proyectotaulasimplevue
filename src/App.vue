<script>
import axios from "axios"
export default {
  data() {
    return {
      nombre_web: "Lista de ciudades",
      ciudades: []
    }
  },
  mounted() {
    axios.get("http://localhost:8082/ciudads/ciudades").then(res => {
      this.ciudades = res.data;
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
      <th>Población</th>
      <th>Descripción</th>
      <th>Imagen</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="ciudad in ciudades">
      <td>{{ ciudad.id }}</td>
      <td>{{ ciudad.nombre }}</td>
      <td>{{ ciudad.poblacion}}</td>
      <td>{{ ciudad.descripcion }}</td>
      <td>{{ ciudad.imagen }}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>
