<template>
  <div>
    <div class="search">
      <input v-model="keyword" type="text" class="search-input" placeholder="请输入城市名或拼音" />
      <div class="search-content" v-show="keyword" ref="search">
        <ul>
          <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
          <li class="search-item border-bottom" v-show="hasNoData">没有找到相应的结果</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  computed: {
    hasNoData() {
      return !this.list.length
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      //若搜索框为空则清列表
      if(!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            //返回含有keyword在value.spell.中的位置，若没有则返回-1
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  //让搜索出的选项可以滚动
  mounted() {
    this.scroll = new Bscroll(this.$refs.search) 
  }

};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/varibles.styl';

.search {
  height: 0.72rem;
  padding: 0.1rem;
  background: $bgColor;
}

.search-input {
  box-sizing: border-box;
  width: 100%;
  height: 0.62rem;
  padding: 0.1rem;
  line-height: 0.62rem;
  text-align: center;
  border-radius: 0.06rem;
  color: #666;
}

.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.68rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
}

.search-item {
  line-height: 0.62rem;
  padding-left: 0.2rem;
  background: #fff;
  color: #666;
}
</style>