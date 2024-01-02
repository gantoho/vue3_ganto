import { defineStore } from "pinia"
import { useDark, useToggle } from '@vueuse/core'

export default defineStore('darkStore', () => {


  
  return {
    darkMode: false,
  }
})
