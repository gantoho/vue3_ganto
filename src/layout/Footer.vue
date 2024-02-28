<script setup lang="ts">
import { ref } from 'vue'

const date = new Date()
const year = date.getFullYear()

const beian = ref(location.hostname)
</script>

<template>
  <footer class="footer mb-5 text-gray-500">
    2019-{{ year }}<i class="font-black not-italic text-yellow-700"> &copy; </i>
    <span>干徒 / Ganto</span>
    <p v-if="beian === 'ganto.cn'"><a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">豫ICP备2024049779号</a></p>
  </footer>
</template>

<style lang="scss" scoped></style>
