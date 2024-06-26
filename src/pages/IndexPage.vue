<template>
  <div class="pt-10 page__container">
    <Button @click="scrollToStart" :class="['h-[132px] w-[132px] bg-cover flex-col fixed top-[50%] right-[5.85%]', {
      'opacity-50': scrollPosition < SCROLL_MIN_VALUE
    }]">
      <div class="flex justify-center"><img src="../assets/arr_up.png"></div>
      <div id="page__button--up" class="mt-[2px] ml-[1px]">Наверх</div>
    </Button>
    <Slider />
    <div><img class="absolute left-0 -mt-20" src="../assets/bg _clock.png"></div>
    <div class="mt-10 flex justify-between">
      <div class="flex flex-col items-center">
        <img class="mt-8 ml-1" src="../assets/advantages_1.png" alt="Бесплатная">
        <img class="-mt-[19px] ml-[22px]" src="../assets/advantages_image_1.png">
        <h6 class="advantage__card--header mt-[13.5px] ml-[5.5px]">доставка</h6>
        <div class="advantage__card--text mt-[2px] ml-2">при заказе от 600 ₽</div>
      </div>
      <div class="flex flex-col items-center pl-[3px]">
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
    <div>
      <div class="relative">
        <img class="absolute -left-[82px] -top-[42px]" src="../assets/roll_promo.png">
      </div>
      <ul class="flex mt-[147px] -ml-[3.5px] gap-8" v-if="labels.length">
        <li @click="setLabel(index)" :class="['text__header--active', {'text__header--inactive': index !== activeLabel}]" v-for="label, index in labels" :key="label.id">{{ label.name }}</li>
      </ul>
      <div class="grid grid-cols-3 gap-[24px]" v-if="productsByLabel.length">
        <ProductCard v-for="product, i in productsByLabel" :key="i" :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AxiosResponse } from 'axios';
import { onMounted, onUnmounted, ref } from 'vue';
import Button from '../components/button/Button.vue';
import Slider from '../components/slider/Slider.vue';
import { useInstance } from '../composables/useAxios';
import ProductCard from '../components/product_card/ProductCard.vue';

interface ILabel {
  id: number;
  name: string;
  title: string;
}

const axios = useInstance();

const SCROLL_MIN_VALUE = 90

const scrollPosition = ref(0)
const labels = ref<ILabel[]>([]);
const productsByLabel = ref([]);

const activeLabel = ref(0);

async function setLabel(index: number) {
  activeLabel.value = index;
  await getProductsByLabel();
}

async function getProductsByLabel() {
  await axios.get("product?label=" + labels.value[activeLabel.value].title + "&sortBy=id:ASC&sortBy=tags.id:ASC&sortBy=ingredients.id:ASC").then((response: AxiosResponse) => {
    productsByLabel.value = response.data.data
  })
}

onMounted(async () => {
  window.addEventListener("scroll", handleScroll)
  await axios.get("label").then(async (response: AxiosResponse) => {
    if(response.data) {
      labels.value = response.data
      await getProductsByLabel();
    }
  })
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})

function handleScroll() {
  scrollPosition.value = window.scrollY
}

function scrollToStart() {
  if(window.scrollY > SCROLL_MIN_VALUE) {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss" scoped>
  .page {
    &__button {
      &--up {
        font-family: TT Interfaces;
        font-size: 18px;
        font-weight: 600;
        line-height: 22.5px;
      }
    }
  }
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