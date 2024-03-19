<template>
  <div class="button">
    {{ text }}
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
    @apply flex items-center justify-center text-white hover:cursor-pointer pr-[1px];
    background-image: url("../../assets/btn.png");
    font-family: TT Interfaces Bold;
    font-size: 17px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: .3px;
    text-align: center;
}
</style>