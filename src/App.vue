<template>
  <div id="app">
    <MainTabBar></MainTabBar>
    <router-view></router-view>
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
