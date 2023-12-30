<script setup lang="ts">
import { ref } from "vue";
import type { IBookmark } from "@/pages/types/bookmarks";

defineProps<{ bookmark: IBookmark }>();

const bookmarkRef = ref<HTMLElement | null>(null);
const textW = ref<number>(0);
const textH = ref<number>(0);
const getWH = () => {
  // e: Event
  // console.log(e)
  textW.value = (
    bookmarkRef.value?.childNodes[0].childNodes[0] as HTMLElement
  ).offsetWidth;
  textH.value = (
    bookmarkRef.value?.childNodes[0].childNodes[0] as HTMLElement
  ).offsetHeight;
};
</script>

<template>
  <div
    draggable="true"
    class="bookmark shadow-inner shadow-black/50 rounded-lg"
    ref="bookmarkRef"
    @mouseenter="getWH"
  >
    <a
      draggable="true"
      class="inline-block relative w-full h-full font-black leading-none"
      :href="bookmark.link"
      target="ganto"
      ><span class="right-2 bottom-2">{{ bookmark.name }}</span></a
    >
  </div>
</template>

<style lang="scss" scoped>
.bookmark {
  width: 85px;
  height: 85px;
  font-size: 16px;
  background: v-bind(
    '(typeof bookmark.backgroundColor === "string") ? bookmark.backgroundColor : `linear-gradient(${bookmark.backgroundColor.deg}deg, ${bookmark.backgroundColor.start}, ${bookmark.backgroundColor.end})`'
  );
  color: v-bind("bookmark.color");

  &:hover {
    a {
      span {
        animation: hor 0.5s infinite linear alternate,
          ver 1.2s infinite linear alternate;
      }
    }
  }

  a {
    padding: 8px;

    span {
      position: absolute;

      @keyframes hor {
        to {
          right: calc(100% - v-bind("textW+8+`px`"));
        }
      }
      @keyframes ver {
        to {
          bottom: calc(100% - v-bind("textH+8+`px`"));
        }
      }
    }
  }
}
</style>
