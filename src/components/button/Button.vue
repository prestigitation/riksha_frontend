<template>
  <div class="button">
    <div class="relative">
      <slot name="default">
        {{ text }}
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface IButtonProps {
    text: string;
}
defineProps<IButtonProps>()
</script>

<style lang="scss" scoped>
.button {
    &::before {
      content: "";
      background-size: cover;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      background-image: url("../../assets/btn.png");
    }
    @apply flex items-center justify-center text-white hover:cursor-pointer pr-[1px];
    font-family: TT Interfaces Bold;
    font-size: 17px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: .3px;
    text-align: center;
}
</style>