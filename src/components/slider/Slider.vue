
<template>
  <div class="h-[510px]">
    <SliderSwitcher class="relative top-[35.2%] -left-[3.25%]" />
    <div class="flex items-center justify-center h-[100%] -mt-[72px]">
        <div v-if="slide === 0 " class="h-full w-full">
            <div class="slider__container--background">
                <div>
                    <b class="slider__promo--header">Калифорния <span class="text__secondary">в подарок</span> при первом заказе</b>
                </div>
                <div class="slider__promo--discount">от 1500 ₽</div>
            </div>
            <Button class="slider__promo--button" text="Подробнее" />
            <img class="relative -top-[117%] left-[54.1%]" src="../../assets/promo.png">
        </div>
    </div>
    <SliderSwitcher class="relative -top-[66.2%] -right-[96.7%] rotate-180" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SliderSwitcher from './SliderSwitcher.vue';
import Button from '../button/Button.vue';

const slide = ref(0);
</script>

<style lang="scss" scoped>
    .slider {
        &__promo {
            &--button {
                @apply relative -top-[17%] left-[5%] mt-[1px] -ml-[1px] w-[172px] h-[172px];
            }
            &--discount {
                @apply mt-[5px];
                font-family: TT Interfaces;
                font-size: 20px;
                font-weight: 500;
                line-height: 25px;
                letter-spacing: 0em;
                text-align: left;
            }
            &--header {
                @apply block w-[40%];
                font-family: TT Interfaces Bold;
                font-size: 38px;
                font-weight: 700;
                line-height: 51px;
                word-spacing: -1px;
                letter-spacing: 0.48px;
            }
        }
        &__container {
            &--background {
                @apply h-[83.13%] pt-[121px] pl-[60px];
                background: #F5F9FA;
                border-radius: 20px;
            }
        }
    }
</style>