<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="img-swiper" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  home: "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      }
    };
  },
  computed: {
    showSwiper() {
      return this.list.length
    }
  }
};
</script>

<style lang="stylus" scoped>
  // .wrapper >>> .swiper-pagination-bullet-active 
  .wrapper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 31.25%;
    background: #eee;
  }

  .img-swiper {
    width: 100%;
  }
</style>