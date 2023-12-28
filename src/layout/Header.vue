<script setup lang='ts'>
import Tabbar from '@/components/Tabbar.vue'
</script>

<template>
  <header class="header pt-32 bg-cover">
    <div class="author">
      <span class="text-5xl font-black">干徒</span>
    </div>
    <div class="text-sm font-light mt-2 mb-2">
      <p>没有设计就是最好的设计</p>
    </div>
    <Tabbar/>
  </header>
</template>

<style lang='scss' scoped>
  header.header {
    .author {
      span {
        text-shadow: 1px 1px 0px #000;
      }
    }
  }
</style>
