<script>
import axios from "axios";
export default {
  data(){
    return {
      nom_web: "Lista de ciudades",
      ciudades: [
        {
          "id": 1,
          "nom": "La Vall d'uixó",
          "descripcion": "Ciudad la Vall",
          "imagen": "imagen1.jpg",
          "poblacion": 20000,
          "franquicias": [],
          "provincia_id": {
            "id": 1,
            "nom": "Castelló",
            "pais_id": {
              "id": 1,
              "nom": "Espanya"
            }
          }
        },
        {
          "id": 2,
          "nom": "Fondeguilla",
          "descripcion": "Ciudad Fondeguilla",
          "imagen": "imagen2.jpg",
          "poblacion": 5000,
          "franquicias": [],
          "provincia_id": {
            "id": 1,
            "nom": "Castelló",
            "pais_id": {
              "id": 1,
              "nom": "Espanya"
            }
          }
        }
        ]
    }
  },
  mounted() {
    axios.get("http://localhost:8082/api/ciudades").then(response => {
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
