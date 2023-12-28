<script setup lang='ts'>
interface ITabbarItem {
  name: string
  to: string,
  type: 'router' | 'link',
}
const tabbarData: Array<ITabbarItem> = [
  {
    name: '首页',
    to: '/home',
    type: 'router',
  },
  {
    name: '书签',
    to: '/bookmarks',
    type: 'router',
  },
  {
    name: '博客',
    to: 'https://www.cnblogs.com/ganto',
    type: 'link',
  },
  {
    name: '开往',
    to: 'https://www.travellings.cn/go.html',
    type: 'link',
  },
  {
    name: 'Dev',
    to: '/dev',
    type: 'router',
  },
]

const toExternal = (link: string) => {
  window.open(link)
}
</script>

<template>
  <div class="tabbar flex items-center">
    <RouterLink v-for="item in tabbarData" custom :to="item.to" :key="item.name + item.to" v-slot="{ isActive, navigate }">
      <template v-if="item.type === 'router'">
        <span class="cursor-pointer font-light hover:text-blue-500 hover:font-black" :class="{ active: isActive }" @click="navigate">{{ item.name }}</span>
      </template>
      <template v-else>
        <span class="cursor-alias font-light hover:text-blue-500 hover:font-black" @click="toExternal(item.to)">{{ item.name }}</span>
      </template>
    </RouterLink>
  </div>
</template>

<style lang='scss' scoped>
.tabbar {
  span {
    position: relative;
    &::after {
      content: '';
      display: inline-block;
      height: 4px;
      width: 100%;
      background-color: transparent;
      position: absolute;
      left: 0;
      bottom: -2px;
    }
  }
  span + span {
    margin-left: 10px;
  }
  span.active {
    color: #287bf0;
    font-weight: 900;
    &::after {
      background-color: #287bf0;
    }
  }
}
</style>
