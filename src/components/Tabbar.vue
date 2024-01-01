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
    name: '开发',
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
        <span class="cursor-pointer font-light hover:font-black" :class="{ active: isActive }" @click="navigate">{{ item.name }}</span>
      </template>
      <template v-else>
        <span class="cursor-alias font-light hover:font-black" @click="toExternal(item.to)">{{ item.name }}</span>
      </template>
    </RouterLink>
  </div>
</template>

<style lang='scss' scoped>
.tabbar {
  font-size: 18px;
  border-bottom: 4px solid rgb(89, 89, 89);
  width: fit-content;
  span {
    position: relative;
    &::after {
      content: '';
      display: inline-block;
      height: 4px;
      width: 0%;
      background-color: #ffffff;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -4px;
      transition: all 0.3s;
    }
    &:hover::after {
      width: 100%;
    }
  }
  span + span {
    margin-left: 10px;
  }
  span.active {
    font-weight: 900;
    &::after {
      width: 100%;
    }
  }
}
</style>
