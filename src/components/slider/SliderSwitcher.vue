<template>
    <div class="slider__switcher">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.46967 17.4697C1.17678 17.7626 1.17678 18.2374 1.46967 18.5303L6.24264 23.3033C6.53553 23.5962 7.01041 23.5962 7.3033 23.3033C7.59619 23.0104 7.59619 22.5355 7.3033 22.2426L3.06066 18L7.3033 13.7574C7.59619 13.4645 7.59619 12.9896 7.3033 12.6967C7.01041 12.4038 6.53553 12.4038 6.24264 12.6967L1.46967 17.4697ZM34 17.25L2 17.25V18.75L34 18.75V17.25Z" fill="#E2E1E1"/>
        </svg>
    </div>
</template>
<style lang="scss" scoped>
.slider__switcher {
    @apply flex items-center justify-center w-[80px] h-[80px] bg-white rounded-[40px] hover:cursor-pointer;
    &:hover {
        &>svg>path {
            fill: #C95C3F;
        }
    }
    box-shadow: 0px 4px 20px 0px #00000014;
}
</style>