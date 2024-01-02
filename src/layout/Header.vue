<script setup lang='ts'>
import Tabbar from '@/components/Tabbar.vue'
</script>

<template>
  <header class="header pt-32 bg-cover">
    <div id="author">
      <span class="author text-5xl font-semibold">干徒</span>
      <i class="shine"></i>
    </div>
    <div class="motto text-sm font-light mt-2 mb-2">
      <p>这很酷</p>
    </div>
    <Tabbar/>
  </header>
</template>

<style lang='scss' scoped>
  header.header {
    #author {
      position: relative;
      span.author {
        transition: all 1s;
      }
      span.author:hover {
        & + i.shine {
          width: 5em;
          height: 5em;
          left: 0.5em;
          filter: blur(30px);
        }
      }
      i.shine {
        transition: all .5s;
        display: inline-block;
        width: 10em;
        height: 10em;
        left: -2em;
        filter: blur(60px);
        border-radius: 50%;
        background-image: linear-gradient( 135deg, #ffd744bb 50%, #93ff93bb 50% );
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: -1;
      }
    }
  }
</style>
