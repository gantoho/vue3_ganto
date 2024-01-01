<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import useDevStore from "@/store/devStore";
import Nameplate from "@/components/Nameplate.vue";
// import debounce from '@/utils/debounce'

defineOptions({
  name: "Dev",
});

const img: Ref<string> = ref("");
const devStore = useDevStore();
const regain = async () => {
  await devStore.getData();
  img.value = devStore.imgState;
};
if (devStore.imgState.length === 0) {
  await regain();
} else {
  img.value = devStore.imgState;
}
</script>

<template>
  <div class="dev">
    <Nameplate>
      <template #default>
        <div class="before z-50">Ganto</div>
        <div class="middle z-50">.</div>
        <div class="after z-50">Me</div>
      </template>
    </Nameplate>
    <div class="img relative overflow-hidden rounded-xl">
      <img
        class="w-full m-auto max-h-96 object-contain"
        :src="'https://files.cevno.cn/files/' + img"
      />
      <button
        class="opacity-0 absolute rounded right-2 bottom-5 w-12 h-6 bg-sky-900/50 text-sm text-cyan-400 backdrop-blur-md shadow-inner shadow-white hover:shadow-sky-300"
        @click="regain()"
      >
        Regain
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dev {
  .img {
    button {
      transition: all 0.3s;
    }
    &:hover {
      button {
        bottom: 8px;
        opacity: 1;
      }
    }
  }
}
</style>
