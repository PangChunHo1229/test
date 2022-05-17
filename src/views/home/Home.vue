<template>
  <div id="home">
    <NavBar class="home-nav">
      <!-- <template #left></template> -->
      <template #center>购物街</template>
      <!-- <template #right></template> -->
    </NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";

import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  props: {},
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  methods: {},
  created() {
    // 1. 请求多个数据
    getHomeMultidata().then((res) => {
      console.log(res);
      // console.log(this);Vue
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style >
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>