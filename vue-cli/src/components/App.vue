<template>
  <div>
    <swiper autoplay="true" delay="300" width=100>
      <swiper-item v-for="item in 6" :key="item" :content="item"></swiper-item>
    </swiper>
  </div>
</template>

<script>
  import Swiper from '@/components/Swiper.vue'
  import SwiperItem from '@/components/SwiperItem.vue'
  export default {
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>

<style lang="scss" scoped>
  
</style>