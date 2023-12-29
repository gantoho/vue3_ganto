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
    class="bookmark shadow-inner shadow-black/50"
    ref="bookmarkRef"
    @mouseenter="getWH"
  >
    <a
      draggable="true"
      class="inline-block relative w-full h-full font-black leading-none"
      :href="bookmark.link"
      target="ganto"
      ><span class="right-0 bottom-0">{{ bookmark.name }}</span></a
    >
  </div>
</template>

<style lang="scss" scoped>
.bookmark {
  width: 100px;
  height: 100px;
  font-size: 19px;
  background: v-bind(
    '(typeof bookmark.backgroundColor === "string") ? bookmark.backgroundColor : `linear-gradient(${bookmark.backgroundColor.deg}deg, ${bookmark.backgroundColor.start}, ${bookmark.backgroundColor.end})`'
  );
  color: v-bind("bookmark.color");
  // border: v-bind('bookmark.border? `1px solid ${bookmark.border}` : `none`');
  padding: 8px;

  // &:hover {
  //   animation: bookmarkAnimate 1s ease-in-out forwards;
  // }

  // @keyframes bookmarkAnimate {
  //   0% {
  //     opacity: 1;
  //     filter: blur(0);
  //   }
  //   25% {
  //     opacity: .5;
  //     filter: blur(2px);
  //   }
  //   50% {
  //     opacity: 1;
  //     filter: blur(0);
  //   }
  //   75% {
  //     opacity: .5;
  //     filter: blur(2px);
  //   }
  //   100% {
  //     opacity: 1;
  //     filter: blur(0);
  //   }
  // }

  a {
    &:hover span {
      animation: hor 0.5s infinite linear alternate,
        ver 1.2s infinite linear alternate;
    }

    span {
      position: absolute;

      @keyframes hor {
        to {
          right: calc(100% - v-bind("textW+`px`"));
        }
      }
      @keyframes ver {
        to {
          bottom: calc(100% - v-bind("textH+`px`"));
        }
      }
    }
  }
}
</style>
