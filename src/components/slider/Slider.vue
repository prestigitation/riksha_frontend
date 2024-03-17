
<template>
  <div class="h-[510px]">
    <SliderSwitcher class="relative top-[35%] -left-[3.5%]" />
    <div class="flex items-center justify-center h-[100%]">
        <div v-if="slide === 0 " class="h-full w-full">
            <div class="slider__container--background">

            </div>
        </div>
    </div>
    <SliderSwitcher class="relative -top-[80.4%] -right-[96.5%] rotate-180" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SliderSwitcher from './SliderSwitcher.vue';

const slide = ref(0);
</script>

<style lang="scss" scoped>
    .slider {
        &__container {
            &--background {
                @apply h-[83.13%];
                background: #F5F9FA;
                border-radius: 20px;
            }
        }
    }
</style>