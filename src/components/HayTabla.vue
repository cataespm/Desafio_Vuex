<script>
import { mapStores } from 'pinia'
import { useJuegosStore } from '@/stores/juegos'

export default {
  computed: {
    /**
     * useJuegosStore
     * juegosStore
     */
    ...mapStores(useJuegosStore)
  },
  created() {
    this.juegosStore.fetchGames()

    console.log(this.juegosStore.juegos)
  },
  methods: {
    agregarStock(codigo) {
      this.juegosStore.agregarStock(codigo)
    },
    disminuirStock(codigo) {
      this.juegosStore.disminuirStock(codigo)
    }
  }
}
</script>

<template>
  <div class="table-responsive">
    <table class="table">
      <thead class="table-info">
        <tr>
          <th class="fw-bold text-center text-primary-emphasis">Código</th>
          <th class="fw-bold text-center text-primary-emphasis">Nombre</th>
          <th class="fw-bold text-center text-primary-emphasis">Stock</th>
          <th class="fw-bold text-center text-primary-emphasis">Precio</th>
          <th class="fw-bold text-center text-primary-emphasis">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="juego in juegosStore.juegos" :key="juego.codigo" class="text-center">
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>{{ juego.precio }}</td>
          <td>
            <button
              type="button"
              class="btn btn-outline-primary me-2"
              @click="agregarStock(juego.codigo)"
            >
              Agregar
            </button>
            <button
              type="button"
              class="btn btn-outline-primary"
              @click="disminuirStock(juego.codigo)"
            >
              Dismuir
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style>
body {
  font-family: 'lato', sans-serif;
}
</style>
