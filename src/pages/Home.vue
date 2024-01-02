<script setup lang="ts">
// import { ref } from 'vue'
// import { getListData } from '@/api/list'

// const listData = ref({})
// getListData({ method: 'get', params: { id: 2 } }).then((data) => {
//   console.log(data)
//   listData.value = data
// })
type ICallMe = {
  platform: string;
  link: string;
};

const callMe: Array<ICallMe> = [
  {
    platform: "GitHub@gantoho",
    link: "https://github.com/gantoho",
  },
  {
    platform: "Gitee@ganto",
    link: "https://gitee.com/ganto",
  },
  {
    platform: "BiliBili@干徒",
    link: "https://space.bilibili.com/1112912961",
  },
  {
    platform: "博客园@干徒",
    link: "https://cnblogs.com/ganto",
  },
  {
    platform: "i@ganto.me",
    link: "mailto:i@ganto.me?cc=i@ganto.icu&amp;body=你好，干徒！我有一些想法要与你分享：",
  },
];
</script>

<template>
  <div class="home">
    <div>你好！我是一名前端开发</div>
    <div class="mt-4">
      常用的前端技术：JavaScript、Vue、React；目前在学：Golang、Rust、Java
    </div>
    <div class="mt-4"></div>
    <div class="mt-4">
      <p class="block">你可以在此处找到我：</p>
      <p class="flex gap-x-3 gap-y-1 flex-wrap">
        <a
          class="text-link border-b-2 transition duration-1000"
          v-for="item in callMe"
          :key="item.platform"
          :href="item.link"
          target="ganto"
          >{{ item.platform }}</a
        >
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  .text-link {
    border-color: var(--g-home-link-border);
    
    &:hover {
      border-color: var(--g-home-link-hover);
    }
  }
}
</style>
