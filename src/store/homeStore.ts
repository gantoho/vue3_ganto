import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export default defineStore('homeStore', () => {
  const count = ref(0)

  const add = (value: number = 1) => {
    count.value += value
  }

  const countSquare = computed(() => {
    return count.value * count.value
  })
  
  return {
    count,
    add,
    countSquare,
  }
})
