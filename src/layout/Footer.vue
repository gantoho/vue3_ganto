<script setup lang="ts">

const date = new Date()
const year = date.getFullYear()
</script>

<template>
  <footer class="footer mb-5 text-gray-500">
    2019-{{ year }}<i class="font-black not-italic text-yellow-700"> &copy; </i>
    <span>干徒 / Ganto</span>
  </footer>
</template>

<style lang="scss" scoped></style>
