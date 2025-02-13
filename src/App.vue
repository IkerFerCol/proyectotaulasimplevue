<script>
import axios from "axios";
export default {
  data(){
    return {
      nom_web: "Lista de ciudades",
      ciudades: []
    }
  },
  mounted() {
    axios.get("http://localhost:8082/ciudads").then(response => {
      let ciudades = response.data.results;
       let result = [];
      for (let ciudad of ciudades){
        axios.get(ciudad.url).then(response_details => {
          let ciud = response_details.data;
          result.push(ciud);
        })
        console.log(ciudad);
      }


    })
  }
}
</script>

<template>
  <h1>{{ nom_web }}</h1>

  <table>
    <thead>
    <tr>
      <th>Nombre</th>
      <th>Poblacion</th>
      <th>Descripcion</th>
      <th>Imagen</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="ciudad in ciudades">
      <td>{{ ciudad.nom }}</td>
      <td>{{ ciudad.poblacion }}</td>
      <td>{{ ciudad.descripcion }}</td>
      <td>{{ ciudad.imagen }}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>
