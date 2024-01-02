<script setup lang='ts'></script>

<template>
  <div class="identification mb-5">
    <div
      class="content flex flex-col direc overflow-hidden relative border-4 rounded-xl p-4 font-black w-fit font-SmileySans m-auto cursor-pointer"
      >
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="default flex">
        <slot name="default"></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.identification {
  color: #fff;
  .content {
    font-size: 25px;
    text-shadow: 4px 2px 2px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    transform: perspective(500px) rotateY(-15deg) rotateX(15deg);
    box-shadow: 10px 10px 10px 0px rgb(117, 117, 117);

    .header {
      position: relative;
      z-index: 99;
      font-size: 12px;
    }
    .default {
      position: relative;
      z-index: 99;
    }
    .footer {
      position: relative;
      z-index: 99;
      font-size: 12px;
      text-align: right;
    }
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
</style>
