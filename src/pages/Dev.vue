<script setup lang='ts'>
import { ref } from 'vue'
import { getImg } from '@/api/getImg'

defineOptions({
  name: "Dev"
})

const count = ref(0)
const img = ref<string>()

img.value = await getImg({ method: 'get' }) as any

console.log(img.value)
</script>

<template>
  <div class="dev">
    <input type="text" v-model="count">
    <div class="img">
      <img :src="'https://files.cevno.cn/files/' + img" />
    </div>
  </div>
</template>

<style lang='scss' scoped>
  
</style>
