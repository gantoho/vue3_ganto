<script setup lang='ts'>
import type { IBookmark } from '@/pages/types/bookmarks'

defineProps<{bookmark: IBookmark}>()
</script>

<template>
  <div class="bookmark">
    <a class="flex items-end justify-end" :href="bookmark.link" target="ganto">{{ bookmark.name }}</a>
  </div>
</template>

<style lang='scss' scoped>
.bookmark {
  width: 80px;
  height: 80px;
  border-radius: 5px;
  font-size: 12px;
  background-color: v-bind('bookmark.backgroundColor');
  color: v-bind('bookmark.color');
  border: v-bind('bookmark.border? `1px solid ${bookmark.border}` : `none`');

  a {
    width: 100%;
    height: 100%;
    padding: 2px 8px;
    font-weight: 900;
  }
}
</style>
