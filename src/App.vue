<template>
  <!-- 1.路由配置meta: {footShow: true, } -->
  <!-- 2. <div id="app" v-if="$route.meta.footShow"> -->
  <div id="app">
    <MainTabBar v-show="this.$route.path.indexOf('detail') == -1"></MainTabBar>
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// import base from './assets/css/base.css';
// import base from "assets/css/base.css";
// import base from "@/assets/css/base.css";
// import MainTabBar from "./components/content/MainTabBar/MainTabBar";
import MainTabBar from "@/components/content/MainTabBar/MainTabBar";

export default {
  name: "app",
  components: {
    MainTabBar,
  },
};
</script>
<style>
@import url("./assets/css/base.css");
</style>
