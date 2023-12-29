<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import useDevStore from "@/store/devStore";

defineOptions({
  name: "Dev",
});

const img: Ref<string> = ref("");
const devStore = useDevStore();
const recover = async () => {
  await devStore.getData();
  img.value = devStore.imgState;
};
if (devStore.imgState.length === 0) {
  await recover();
} else {
  img.value = devStore.imgState;
}
</script>

<template>
  <div class="dev">
    <div class="identification mb-5">
      <div
        class="content overflow-hidden relative flex border-4 rounded-xl p-3 font-black w-fit font-SmileySans m-auto"
      >
        <div class="before z-50">Ganto</div>
        <div class="middle z-50">.</div>
        <div class="after z-50">Me</div>
      </div>
    </div>
    <div class="img relative">
      <img class="w-full m-auto" :src="'https://files.cevno.cn/files/' + img" />
      <button
        class="opacity-0 absolute right-2 bottom-5 w-12 h-6 bg-sky-900/50 text-sm text-cyan-400 backdrop-blur-md shadow-inner shadow-white hover:shadow-sky-300"
        @click="recover()"
      >
        重获
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dev {
  .identification {
    .content {
      font-size: 25px;
      text-shadow: 4px 2px 2px rgba(0, 0, 0, 0.2);
      transition: all 0.3s;
      transform: perspective(500px) rotateY(-15deg) rotateX(15deg);
      box-shadow: 10px 10px 10px 0px rgb(117, 117, 117);

      &:hover {
        text-shadow: -4px -2px 2px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 0px 10px 0px rgb(117, 117, 117);
        transform: perspective(500px) rotateY(0deg);

        &::before {
          right: calc(-100% + 5px);
        }
      }

      &::before {
        content: "";
        display: inline-block;
        width: 200%;
        height: 200%;
        background-image: linear-gradient(
          135deg,
          #747e8c,
          #747e8c,
          #c2c6d8,
          #747e8c,
          #747e8c
        );
        position: absolute;
        right: -5px;
        bottom: 50%;
        transition: all 0.3s;
        transform: translateY(50%);
      }

      &::after {
        content: "";
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #000000;
        position: absolute;
        left: 5px;
        top: 5px;
        border: 1px solid #c2c6d8;
      }
    }
  }
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
