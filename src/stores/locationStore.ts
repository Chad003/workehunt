import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useGeolocation } from '@vueuse/core'

export const useLocationStore = defineStore('locationStore', () => {


  const LATITIUDE = ref<string>()
  const LONGTITUDE = ref<string>()

  function initLatitude(data: string) {
    LATITIUDE.value = data
  }

  function iniLongtitude(data: string) {
    LATITIUDE.value = data
  }

  async function getLocation() {
    const { coords, locatedAt, error, resume, pause } = useGeolocation()
    console.log(coords.value.latitude)
    console.log(coords.value.longitude)
    initLatitude(coords.value.latitude.toString());
    iniLongtitude(coords.value.longitude.toString());
  }

  return {
    LATITIUDE,
    LONGTITUDE,
    getLocation
  }

})
