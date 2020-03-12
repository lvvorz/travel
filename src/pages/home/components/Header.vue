<template>
  <div class="header">
	<div class="header-left">
    <div class="iconfont back-icon">&#xe624;</div>
  </div>
		<div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市、内容
    </div>
		<div class="header-right">城市
      <span class="iconfont down-icon">&#xe62d;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/varibles.styl'
  .header
    display: flex
    line-height: .86rem  
    color: #fff
    background: $bgColor
    .header-left
      float: left
      width: .64rem
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      height: .64rem
      line-height: .64rem
      background: #fff
      color: #ccc
      border-radius: .1rem
    .header-right
      float: right
      width: 1.24rem
      text-align: center
      .down-icon
        font-size: .24rem

</style>