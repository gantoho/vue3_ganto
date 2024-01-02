<script setup lang='ts'>
import { useDark, useToggle } from '@vueuse/core'
import { Sunny } from '@element-plus/icons-vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

interface ITabbarItem {
  type: 'router' | 'link' | 'btn',
  nameType?: 'text' | 'component',
  name: string,
  to?: string,
  link?: string,
  event?: Function
}
const tabbarData: Array<ITabbarItem> = [
  {
    type: 'router',
    name: '首页',
    to: '/home',
  },
  {
    type: 'router',
    name: '书签',
    to: '/bookmarks',
  },
  {
    type: 'router',
    name: '开发',
    to: '/dev',
  },
  {
    type: 'link',
    name: '博客',
    link: 'https://www.cnblogs.com/ganto',
  },
  {
    type: 'link',
    name: '开往',
    link: 'https://www.travellings.cn/go.html',
  },
  {
    type: 'btn',
    name: 'Sunny',
    event: toggleDark,
  },
]

const toExternal = (link: string) => {
  window.open(link)
}

const changeBtn = (event: Function, $eve: MouseEvent) => {
  document.documentElement.style.setProperty('--x', $eve.clientX + 'px')
  document.documentElement.style.setProperty('--y', $eve.clientY + 'px')
  // 判断浏览器是否支持document.startViewTransition
  if ((document as any).startViewTransition) {
    // 如果支持就使用document.startViewTransition方法
    (document as any).startViewTransition(() => {
      event()
    })
  } else {
    // 如果不支持，就使用最原始的方式，切换主题
    event()
  }
}
</script>

<template>
  <div class="tabbar flex">
    <RouterLink v-for="item in tabbarData" custom :to="item.to? item.to : ''" :key="item.name + item.to" v-slot="{ isActive, navigate }">
      <template v-if="item.type === 'router'">
        <span class="cursor-pointer font-light hover:font-black" :class="{ active: isActive }" @click="navigate">{{ item.name }}</span>
      </template>
      <template v-else-if="item.type === 'link'">
        <span class="cursor-alias font-light hover:font-black" @click="toExternal(item.link ? item.link : '')">{{ item.name }}</span>
      </template>
      <template v-else="item.type === 'btn'">
        <span class="cursor-pointer" v-if="item.name === 'Sunny'">
          <el-icon size="25" >
            <Sunny @click="changeBtn(item.event ? item.event : ()=>{}, $event)" />
          </el-icon>
        </span>
        <span v-else class="cursor-alias font-light hover:font-black" @click="changeBtn(item.event ? item.event : ()=>{}, $event)">{{ item.name }}</span>
      </template>
    </RouterLink>
  </div>
</template>

<style lang='scss' scoped>
.tabbar {
  font-size: 18px;
  border-bottom: 4px solid var(--g-tabbar-border);
  width: fit-content;
  span {
    position: relative;
    &::after {
      content: '';
      display: inline-block;
      height: 4px;
      width: 0%;
      background-color: var(--g-tabbar-item-after);
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
