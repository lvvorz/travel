<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="http://img1.qunarzz.com/sight/p0/201403/06/2f1ae390435649f80130201861e5cd8e.jpg_600x330_79563d15.jpg"
      />
      <div class="banner-info">
        <div class="banner-title">南宁动物园(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe63a;</span>
          32
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from "@/common/gallary/Gallary.vue";
export default {
  name: "Detailbanner",
  data() {
    return {
      showGallary: false,
      imgs: [
        "http://img1.qunarzz.com/sight/p0/1411/57/afaba701fdb702fbea96d3e84bb5d75b.water.jpg_r_800x800_a9418bf0.jpg",
        "http://img1.qunarzz.com/sight/p0/1411/7a/d2d1e18eba93fa73ac49933f8d6e410a.water.jpg_r_800x800_d75861db.jpg"
      ]
    };
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    }
  },
  components: {
    CommonGallary
  }
};
</script>
</script>
<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
}

.banner-img {
  width: 100%;
}

.banner-info {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 0.6rem;
  color: #fff;
  background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
}

// 让title撑起来
.banner-title {
  flex: 1;
  font-size: 0.32rem;
  padding: 0 0.2rem;
}

.banner-number {
  padding: 0 0.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
  margin-top: 0.14rem;
  border-radius: 0.2rem;
  background: rgba(0, 0, 0, 0.8);
  font-size: 0.24rem;
}

.banner-icon {
  font-size: 0.24rem;
}
</style>