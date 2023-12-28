<script setup lang='ts'>
  import Header from './Header.vue'
  import Main from './Main.vue'
  import Footer from './Footer.vue'
</script>

<template>
  <div class="layout w-full m-auto min-h-screen">
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  max-width: 600px;
}
</style>
