<template>
  <div ref="body">
    <header>
      <div class="max-w-[1224px] min-h-[89px] flex items-center mx-auto">
        <a href="/" class="contents">
          <img src="./assets/logo.png" class="absolute mt-2 self-stretch">
        </a>
        <ul class="pl-[196px] mt-[2px] flex gap-[48.5px]">
          <li class="header__list--item" v-for="(item, i) in headerNavigationPoints" :key="i">
            <a :href="item.link">{{ item.label }}</a>
          </li>
        </ul>
        <div class="ml-[87.5px] mt-1">
          <div class="flex flex-col gap-[3px]">
            <div class="flex items-center -mt-[6px]">
              <img src="./assets/phone-fill.png">
              <span class="header__contacts--phone">+7 (495) 617-14-24</span>
            </div>
            <div class="header__contacts--workhours">
              с 10:00 до 23:00
            </div>
          </div>
        </div>
        <div class="header__balance">
          <div class="header__balance--amount">0 ₽</div>
          <div class="header__balance--splitter" />
          <div class="hover:cursor-pointer">
            <img src="./assets/shopping-cart-2-fill.png">
            <div class="absolute">
              <div class="header__balance--notifications">0</div>
            </div>
          </div>
        </div>
        <div class="header__account">
          <img src="./assets/account.png">
        </div>
      </div>
      <div class="header__products--container">
        <ul class="header__list header__products--list">
          <li class="header__list--item" style="width: 64px" v-for="(item, i) in categories" :key="i">
            <a class="flex flex-col justify-center items-center" :href="'products/' + item.slug">
              <img class="w-8 h-8" v-if="item.image" :src="apiUrl + item.image">
              <span class="header__products--item">{{ item.title }}</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
    <div class="body">
      <RouterView />
    </div>
    <footer class="footer">
      <div class="max-w-[1224px] flex items-center mx-auto">
        <img src="./assets/logo_white.png" class="-mt-[39px]">
        <div class="flex flex-col pl-[51px] gap-[10px] mt-[34px]">
          <ul class="flex gap-[40px] -mt-1">
            <li class="header__list--item" v-for="(item, i) in footerNavigationPoints" :key="i">
              <a :href="item.link">{{ item.label }}</a>
            </li>
          </ul>
          <div class="flex gap-3">
            <img src="./assets/facebook-box-fill.png" alt="Facebook link">
            <img src="./assets/instagram-fill.png" alt="Instagram link">
            <img src="./assets/vk-social-logotype.png" alt="VK link">
          </div>
        </div>
        <div class="pl-[91px]">
            <ul class="grid grid-cols-5 gap-[21px] mt-[34px]">
              <li class="header__list--item" v-for="(item, i) in footerCategories" :key="i">
                <a :href="'products/' + item.slug">{{ item.title }}</a>
              </li>
            </ul>
        </div>
        <div class="flex flex-col gap-[9px] pl-[100px] mt-8">
            <div class="flex items-center -mt-[6px]">
              <span class="footer__contacts--phone">+7 (495) 617-14-24</span>
            </div>
            <div class="footer__contacts--workhours">
              с 10:00 до 23:00
            </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";
import { onBeforeMount, onMounted, reactive, ref } from "vue";
import { useInstance } from "./composables/useAxios";
import { AxiosResponse } from "axios";

interface Category {
  title: string;
  slug: string;
  image: string;
}

const apiUrl = import.meta.env.VITE_API_URL;
const axios = useInstance();

let categories = ref<Category[]>([]);
let footerCategories = ref<Omit<Category, 'image'>[]>([]);

onMounted(async () => {
  await axios.get("category").then((response: AxiosResponse) => {
    if(response.data) {
      categories.value = response.data
      footerCategories.value = response.data.map((category: Category) => ({
        title: category.title,
        slug: category.slug
      }))
    }
  })
})

interface IHeaderNavigationPoint {
  label: string;
  link: string;
  imageLink?: string;
}
const headerNavigationPoints: IHeaderNavigationPoint[] = [
  {label: 'О нас', link: '/about'},
  {label: 'Доставка и оплата', link: '/delivery_and_payment'},
  {label: 'Контакты', link: '/contacts'},
  {label: 'Бонусы', link: '/bonuses'},
  {label: 'Вакансии', link: '/vacancies'}
]

const footerNavigationPoints: IHeaderNavigationPoint[] = [
  {label: 'О нас', link: '/about'},
  {label: 'Доставка и оплата', link: '/delivery_and_payment'},
  {label: 'Контакты', link: '/contacts'}
]
</script>

<style lang="scss">
  #root {
    font-family: TT Interfaces;
  }
</style>

<style lang="scss">
@import "./styles/_variables";
@import "./styles/_main";

.body {
  position: relative;
}

.body:before {
  content: ' ';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 20%;
  background-image: url("./assets/bg.jpg");
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
}

.footer {
  @apply mt-[6148px] h-[182px];
  &__contacts {
    color: white;
    &--trademark {
      
    }
    &--phone {
      font-size: 24px;
      font-weight: 700;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;
    }
    &--workhours {
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      text-align: end;
    }
  }
  &__list {
    &--item {
      font-size: 14px;
    }
  }
  background: black;
  color: white;
}

.header {
  &__products {
    &--item {
      @apply mt-[10px];
      font-family: TT Interfaces;
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0em;
    }
    &--list {
      @apply pt-[2px];
      min-height: inherit;
      gap: 44px !important;
    }
    &--container {
      @apply min-h-[83px];
      background: $primary-color;
      padding-left: calc(188px + ((100vw - 1224px) / 2));
    }
  }
  &__account {
    @apply h-12 w-12 flex items-center justify-center ml-6 hover:cursor-pointer;
    border-radius: 8px;
    background: $primary-color;
  }
  &__balance {
    @apply pl-[7px] -mt-[2px] ml-[57px] flex justify-evenly items-center min-h-[48px] min-w-[134px];
    &--notifications {
      @apply mt-[1px] relative flex items-center justify-center -top-7 left-3 w-4 h-4;
      border-radius: 8px;
      background: #E07153;
      color:white;
      font-size: 12px;
    }
    &--splitter {
      @apply ml-3;
      content: '';
      left: 50%; /* Выравнивание линии по центру */
      top: 0;
      bottom: 0;
      width: 1px; /* Толщина линии */
      background-color: white; /* Цвет линии */
      height: 24px;
    }
    &--amount {
      @apply mt-1 mr-0 ml-[5px];
      font-family: TT Interfaces;
      font-size: 14px;
      font-weight: 500;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: center;
    }
    border-radius: 6px;
    background: $primary-color;
  }
  &__contacts {
    &--workhours {
      @apply text-end;
      font-family: TT Interfaces;
      font-size: 12px;
      font-weight: 500;
      line-height: 15px;
      letter-spacing: 0em;
      color: #B7B7B7;
    }
    &--phone {
      font-family: TT Interfaces;
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;
      margin-top: 1.5px;
      margin-left: 7.5px;
      word-spacing: 1px;
    }
  }
  &__list {
    @apply flex items-center gap-[48px];
    &--item {
      font-family: TT Interfaces;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
}
</style>