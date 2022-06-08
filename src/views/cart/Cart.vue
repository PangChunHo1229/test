<template>
  <div>
    <NavBar class="nav-bar">
      <template #center> 购物车 ({{ length }}) </template>
    </NavBar>

    <!-- 商品列表 -->
    <CartList></CartList>

    <!-- 底部汇总 -->
    <CartBottomBar />
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
// import VScroll from "@/components/common/scroll/VSroll";
import Scroll from "components/content/Scroll/Scroll";

import CartList from "./components/CartList";
import CartBottomBar from "./components/CartBottomBar.vue";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar,
    Scroll,
  },
  computed: {
    // TIP 数据从 store 中取出，所以只要 state 中的数据改变了，组件都能监听到
    ...mapGetters({
      length: "cartListLength",
      // cartList: "cartList",
    }),
    // cartLength() {
    //   return this.$store.getters.cartLength;
    // },
  },
};
</script>

<style  scoped>
.nav-bar {
  background-color: #fe647f;
  color: #fff;
}
</style>
