<template>
  <div class="swiper-box">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item,key) in swiperLists" :key="item.id">
        <img class="swiper-image" :src="item.src" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
  export default {
    name: "HomeSwiper",
    data () {
      return{
        swiperOption:{
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
          },
          loop : true,
          speed:1000,
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
        },
      }

    },
    props: {
      swiperLists: Array,
      required: true
    }
  }
</script>

<style scoped>
  .swiper-image{
    width: 100%;
    height: 300px;
  }
  .swiper-box .swiper-pagination .swiper-pagination-bullet{
    width: 20px;
    height: 20px;

  }
  .swiper-box .swiper-pagination .swiper-pagination-bullet-active{
    background-color: #fff !important;
  }

</style>
