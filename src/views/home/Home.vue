<template>
  <div id="home">
    <NavBar class="home-nav">
      <!-- <template #left></template> -->
      <template #center>购物街</template>
      <!-- <template #right></template> -->
    </NavBar>
    <TabControl
      ref="tabControl1"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      class="showcontrol"
      v-show="isTabFixed"
    ></TabControl>
    <Scroll
      class="content"
      ref="scroll"
      :probeType="2"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <!-- @scroll和@pullingUp组件里面$emit射出来的 -->
      <HomeSwiper :banners="banners" @swiperLoad="swiperLoad"></HomeSwiper>
      <RecommendView :recommends="recommends"></RecommendView>
      <FeatureView :recommendss="recommends"></FeatureView>

      <TabControl
        ref="tabControl2"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      ></TabControl>
      <GoodsList :goods="showGoods"> </GoodsList>
    </Scroll>
    <BackTop @click.native="backClick" v-show="isShowBackTop"></BackTop>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/content/Scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils";

export default {
  name: "Home",
  props: {},
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      isTabFixed: false,
      TabOffsetTop: 0,
      saveY: 0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    // 1. 请求多个数据
    this.getHomeMultidata();
    // 2. 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 3. 监听item图片加载完成
    //  非父子通信
    // Vue.prototype.$bus = new Vue()
    // this.$bus.$on("事件名", 参数)
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    this.$bus.$on("itemImageLoad", () => {
      // console.log("www");
      // this.$refs.scroll && this.$refs.scroll.refresh();
      refresh();
    });
  },
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 10);
  },
  deactivated() {
    // console.log(this.saveY);
    // 1. 保存Y值
    this.saveY = this.$refs.scroll.scroll.y;

    // 2. 取消全局监听
    // this.$bus.off();
  },
  methods: {
    //事件监听相关的方法

    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },

    backClick() {
      // console.log("backClick");
      // this.$refs.scroll 拿到的是组件
      // this.$refs.Scroll.message
      // @click.native 点击了之后 通过它上面有ref="scroll"绑定组件 然后调用这个方法
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    // 判断当前滚动到哪个位置
    contentScroll(position) {
      // console.log(position);
      // 1. 判断backtop是否显示
      // this.isShowBackTop= -position.y>1000
      this.isShowBackTop = Math.abs(position.y) > 1000;

      // 2. 决定tabcontrol是否吸顶（position:fixed）
      this.isTabFixed = Math.abs(position.y) > 488;
    },
    loadMore() {
      // console.log("222");
      this.getHomeGoods(this.currentType);
    },
    swiperLoad() {
      // 获取tabcontrol的top
      // 所有组件都有属性$el 用于获取组件元素
      // console.log(this.$refs.tabControl2.$el.offsetTop);
      // this.TabOffsetTop = this.$refs.tabControl;
    },

    // 网络请求的方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        // console.log(this);Vue
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res.data.list.push)
        this.goods[type].list.push(...res.data.list);
        // console.log(this.goods[type].list.push(...res.data.list));
        this.goods[type].page += 1;
        // 数据加载完之后
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  position: relative;
  /* padding-top: 42px; */
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  /* position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 10; */
}
/* .tab-control {
  position: sticky;
  top: 44px;
  z-index: 10;
} */
.content {
  /* height: calc(100% - 49px);
  overflow: hidden;
  margin-top: 44px; */

  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
/* .fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
} */
.showcontrol {
  position: relative;
  top: -1px;
  z-index: 9;
}
</style>