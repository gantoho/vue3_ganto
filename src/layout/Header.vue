<script setup lang='ts'>
import Tabbar from '@/components/Tabbar.vue'
</script>

<template>
  <header class="header pt-32 bg-cover">
    <div id="author">
      <span class="author text-5xl font-black">干徒</span>
      <i class="shine"></i>
    </div>
    <div class="text-sm font-light mt-2 mb-2">
      <p>没有设计就是最好的设计</p>
    </div>
    <Tabbar/>
  </header>
</template>

<style lang='scss' scoped>
  header.header {
    #author {
      position: relative;
      span.author {
        text-shadow: 1px 1px 0px #000;
        // background: linear-gradient(90deg, #ffd744, #93ff93 );
        // background-clip: text;
        // -webkit-background-clip: text;
        // -webkit-text-fill-color: transparent;
      }
      i.shine {
        display: inline-block;
        box-shadow: 0 0 180px 75px rgba(255, 255, 255, 0.7);
        position: absolute;
        top: 50%;
        left: 4em;
        z-index: -1;
      }
    }
  }
</style>
