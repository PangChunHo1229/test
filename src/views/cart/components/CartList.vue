<template>
  <div>
    <!-- <div class="empty" v-show="!goodsList.length"> -->
    <div class="cartList">
      <!-- <img src="@/assets/img/cart/empty_cart.png" alt="" /> -->
      <!-- <p>登录后可同步购物车中商品</p> -->
      <Scroll class="content" ref="scroll">
        <CartListItem
          v-for="item in cartList"
          :product="item"
          :key="item.iid"
        />
      </Scroll>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Scroll from "components/content/Scroll/Scroll";
import CartListItem from "./CartListItem.vue";

export default {
  name: "CartList",
  props: {},
  components: {
    CartListItem,
    Scroll,
  },
  computed: {
    ...mapGetters({
      cartList: "cartList",
    }),
  },
  activated() {
    console.log("----");

    this.$refs.scroll.refresh();
  },
};
</script>

<style  scoped>
.content {
  height: 100%;
  overflow: hidden;
}
.cartList {
  height: calc(100% - 44px - 49px - 40px);
}
/* .empty {
  text-align: center;
  margin-top: 50%;
  transform: translateY(-50%);
}

.empty img {
  width: 100px;
}
.empty p {
  font-size: 18px;
  margin-top: 10px;
  color: #333;
} */
</style>
