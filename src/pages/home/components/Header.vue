<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市、内容
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{this.city}}
        <span class="iconfont down-icon">&#xe62d;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
    city: String
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/varibles.styl'

.header {
  display: flex;
  line-height: $headerHeight;
  color: #fff;
  background: $bgColor;

  .header-left {
    float: left;
    width: 0.64rem;

    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    height: 0.64rem;
    line-height: 0.64rem;
    background: #fff;
    color: #ccc;
    border-radius: 0.1rem;
  }

  .header-right {
    float: right;
    width: 1.24rem;
    text-align: center;
    color: #fff;

    .down-icon {
      font-size: 0.24rem;
    }
  }
}
</style>