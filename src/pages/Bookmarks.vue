<script setup lang="ts">
import Bookmark from "@/components/Bookmark.vue";
import type { IBookmark } from "./types/bookmarks";

const bookmarks: IBookmark[] = [
  {
    name: "JS",
    link: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",
    backgroundColor: "#fcdc00",
    color: "#181818",
  },
  {
    name: "Vue",
    link: "https://cn.vuejs.org",
    backgroundColor: "#42b986",
    color: "#2c3845",
  },
  {
    name: "React",
    link: "https://zh-hans.reactjs.org",
    backgroundColor: "#61dafb",
    color: "#23272f",
  },
  {
    name: "Angular",
    link: "https://angular.cn",
    backgroundColor: "#e22d37",
    color: "#fff",
  },
  {
    name: "Svelte",
    link: "https://svelte.dev",
    backgroundColor: "#fd5b3e",
    color: "#ffffff",
  },
  {
    name: "Solid",
    link: "https://www.solidjs.com",
    backgroundColor: "#5187c4",
    color: "#ffffff",
  },
  {
    name: "TS",
    link: "https://www.typescriptlang.org",
    backgroundColor: "#3477c4",
    color: "#ffffff",
  },
  {
    name: "Vite",
    link: "https://vitejs.dev",
    backgroundColor: "#6d6df0",
    // backgroundColor: { deg: 135, start: "#4dc5fd", end: "#be20fa" },
    color: "#ffffff",
  },
  {
    name: "Nuxt",
    link: "https://nuxtjs.org",
    backgroundColor: "#00dc82",
    color: "#ffffff",
  },
  {
    name: "Next",
    link: "https://nextjs.org",
    backgroundColor: "#0271f4",
    color: "#ffffff",
  },
  {
    name: "Remix",
    link: "https://remix.run",
    backgroundColor: "#3287ed",
    color: "#ffffff",
  },
  {
    name: "Go",
    link: "https://go.dev",
    backgroundColor: "#52b7df",
    color: "#ffffff",
  },
  {
    name: "Rust",
    link: "https://www.rust-lang.org",
    backgroundColor: "#ffffff",
    color: "#000000",
    border: "#ffffff",
  },
  {
    name: "Java",
    link: "https://docs.oracle.com/en/java/javase",
    backgroundColor: "#3a75b0",
    color: "#ffffff",
  },
];
</script>

<template>
  <div class="bookmarks flex flex-wrap">
    <Bookmark
      v-for="bookmark in bookmarks"
      :bookmark="bookmark"
      :key="bookmark.name + bookmark.link"
    />
  </div>
</template>

<style lang="scss" scoped>
.bookmarks {
  gap: 10px;
}
</style>
