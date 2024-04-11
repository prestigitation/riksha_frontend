<template>
    <div class="relative bg-white pb-6">
        <div class="absolute flex flex-col top-[47px] left-[9px] gap-2">
            <div class="w-[51px] flex flex-col items-center" v-for="tag in product.tags">
                <img :src="API_URL + tag.image">
                <div class="card__tag--title">{{ tag.title }}</div>
            </div>
        </div>
      <img class="mt-[35px]" :src="API_URL + product.image">
        <div class="absolute flex flex-col top-[52px] -right-[17px]">
            <div class="card__label--shape" v-for="label, i in product.labels" :key="i">
                {{ label.title }}
            </div>
        </div>
        <div class="mt-[31px] -ml-[1px] pl-[26px] pr-[23px]">
            <div class="card__info--values">
                {{ product.grams }} грамм
                <div class="w-[4px] h-[4px] rounded-[2px] ml-[1px] -mt-[2px]" style="background: #E07153;"></div>
                {{ product.calories }} Ккал
            </div>
            <div class="card__info--name">{{ product.name }}</div>
            <div class="card__info--ingredients">
                <div class="card__info--ingredient" v-for="ingredient, i in product.ingredients" :key="i">
                    {{ ingredient.name }}<template v-if="i !== product.ingredients.length - 1">,</template>
                </div>
            </div>
            <div class="card__info--price">
                <div>
                    <div :class="`${product?.discount?.discount ? 'card__info--oldprice': 'card__info--newprice'}`" v-if="product?.price">{{ product.price }} ₽</div>
                    <div class="card__info--newprice" v-if="product?.discount?.discount">{{ product?.discount.discount }} ₽</div>
                </div>
                <div>
                    <img src="../../assets/order_button.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Button from '../button/Button.vue';
interface IProduct {
  id?: number;

  name: string;

  image: string;

  grams: number;

  calories: number;

  price: number;

  slug: string;

  proteins: number;

  fats: number;

  carbohydrates: number;

  discount: Object;

  category: Object;

  ingredients: Array;

  tags: Array;

  variations: Array;

  labels: Array;
}
interface IProductCardProps {
    product: IProduct;
}
defineProps<IProductCardProps>()
const API_URL = import.meta.env.VITE_API_URL;
</script>

<style lang="scss" scoped>
.card {
    &__info {
        &--newprice {
            @apply -mt-[6px];
            font-family: TT Interfaces;
            font-size: 32px;
            font-weight: 700;
            line-height: 40.48px;
            letter-spacing: .4px;
        }
        &--oldprice {
            @apply line-through;
            font-family: TT Interfaces;
            font-size: 14px;
            font-weight: 400;
            line-height: 17.22px;
            color: #B7B7B7;
        }
        &--price {
            @apply mt-[47px] flex justify-between items-center;
        }
        &--ingredient {
            font-family: TT Interfaces;
            font-size: 14px;
            font-weight: 400;
            line-height: 17.22px;
            &s {
                @apply flex mt-[3px] gap-[3px];
            }
        }
        &--name {
            @apply mt-[5px];
            font-family: TT Interfaces;
            font-size: 24px;
            font-weight: 600;
            line-height: 30px;
        }
        &--values {
            @apply flex items-center gap-2;
            font-family: TT Interfaces;
            font-size: 14px;
            font-weight: 400;
            line-height: 17.22px;
            color: #B7B7B7;
        }
    }
    &__label {
        &--shape {
            @apply w-[72px] h-[72px] flex items-center justify-center pt-[2px];
            border-radius: 36px;
            background: #A1DCDC;
            font-family: TT Interfaces Bold;
            font-size: 20px;
            font-weight: 800;
            line-height: 25.7px;
            text-align: left;
            color: white;
        }
    }
    &__tag {
        &--title {
            @apply mt-[6px];
            font-family: TT Interfaces;
            font-size: 12px;
            font-weight: 600;
            line-height: 9.6px;
            text-align: center;
        }
    }
}
</style>