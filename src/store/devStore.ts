import { defineStore } from "pinia"
import { ref } from 'vue'
import { getImg } from '@/api/getImg'

export default defineStore('devStore', () => {
  const imgState = ref<string>('')

  const getData = async () => {
    imgState.value = await getImg({ method: 'get' }) as any
  }

  getData()
  
  return {
    imgState,
    getData
  }
})
