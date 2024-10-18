import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useJuegosStore = defineStore('juegos', () => {
  const juegos = ref([])

  async function fetchGames() {
    try {
      const url = '/api/juegos.json'
      const { data } = await axios.get(url)

      juegos.value = data
    } catch (error) {
      alert('No encontramos Juegos')
      console.error(error)
    }
  }

  function agregarStock(codigo) {
    juegos.value.map((juego) => {
      if (juego.codigo === codigo) {
        juego.stock++
      }
    })
  }

  function disminuirStock(codigo) {
    juegos.value.map((juego) => {
      if (juego.codigo === codigo) {
        juego.stock--
      }
    })
  }

  return { juegos, fetchGames, agregarStock, disminuirStock }
})
