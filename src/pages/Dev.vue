<script setup lang="ts">
import useDevStore from "@/store/devStore";
import Nameplate from "@/components/Nameplate.vue";
// import debounce from '@/utils/debounce'

defineOptions({
  name: "Dev",
});
const devStore = useDevStore();
const regain = () => {
  devStore.getData();
};
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
        v-if="devStore.imgState"
        class="w-full m-auto max-h-96 object-contain"
        :src="'https://files.cevno.cn/files/' + devStore.imgState"
      />
      <button
        class="opacity-0 absolute rounded-lg right-2 bottom-5 text-sm px-2 py-1 backdrop-blur-sm font-black border-2 border-white/10 bg-white/10 text-black/50 hover:bg-black/10 hover:text-white/50"
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
