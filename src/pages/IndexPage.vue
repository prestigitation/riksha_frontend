<template>
  <div class="mt-10 page__container">
    <Slider />
    <div><img class="absolute left-0 -mt-20" src="../assets/bg _clock.png"></div>
    <div class="mt-10 flex justify-between">
      <div class="flex flex-col items-center">
        <img class="mt-8 ml-1" src="../assets/advantages_1.png" alt="Бесплатная">
        <img class="-mt-[19px] ml-[22px]" src="../assets/advantages_image_1.png">
        <h6 class="advantage__card--header mt-[13.5px] ml-[5.5px]">доставка</h6>
        <div class="advantage__card--text mt-[2px] ml-2">при заказе от 600 ₽</div>
      </div>
      <div class="flex flex-col items-center pl-[2px]">
        <img class="mt-8 -ml-[14px]" src="../assets/advantages_2.png" alt="Доставим">
        <img class="-mt-[9px]" src="../assets/advantages_image_2.png">
        <h6 class="advantage__card--header mt-[14px] -ml-[15px]">за 60 мин</h6>
        <div class="advantage__card--text -ml-4 mt-[2.5px]">или проморол за опоздание</div>
      </div>
      <div class="flex flex-col items-center -ml-[3px]">
        <img class="pt-8 pr-[19px]" src="../assets/advantages_3.png" alt="Подарим">
        <img class="-mt-[5px] -mr-[1px]" src="../assets/advantages_image_3.png">
        <h6 class="advantage__card--header -ml-[17px] mt-[14px]">бонусы</h6>
        <div class="advantage__card--text -ml-[18px] mt-[3px]">бонусная система 1 ₽ = 1 бонус</div>
      </div>
      <div class="flex flex-col items-center">
        <img class="mt-8 pr-[31px]" src="../assets/advantages_4.png" alt="Свежие">
        <img class="-ml-[14px] mt-[1px]" src="../assets/advantages_image_4.png">
        <h6 class="advantage__card--header mt-[14px] -ml-[29px]">продукты</h6>
        <div class="advantage__card--text mt-[2px] -ml-[29px]">Никаких заготовок!</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Slider from '../components/slider/Slider.vue';


</script>

<style lang="scss" scoped>
  .advantage {
    &__card {
      &--header {
        font-family: TT Interfaces Bold;
        font-size: 13px;
        font-weight: 600;
        line-height: 17.71px;
        text-align: left;
        letter-spacing: .25px;
      }
      &--text {
        font-family: TT Interfaces;
        font-size: 14px;
        font-weight: 400;
        line-height: 17.22px;
        text-align: center;
      }
    }
  }
</style>