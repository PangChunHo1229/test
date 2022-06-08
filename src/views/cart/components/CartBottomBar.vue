<template>
  <div class="bottombar">
    <div class="check-all">
      <checkButtom
        :is-checked="isSelectAll"
        @click.native="checkAll"
      ></checkButtom>
      <div>全选</div>
    </div>

    <div class="total">合计：{{ totalPrice }}</div>
    <div class="go">结算({{ checkLength }})</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import checkButtom from "components/content/checkButtom/checkButtom";

export default {
  name: "CartBottomBar",
  computed: {
    ...mapGetters({
      cartList: "cartList",
      isSelectAll: "isSelectAll",
    }),
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      // return this.cartList.filter((item) => item.checked).length;
      return this.cartList.reduce(
        (pre, cur) => (cur.checked ? pre + cur.count : pre),
        0
      );
    },
  },
  methods: {
    checkAll() {
      this.$store.dispatch("checkAll", !this.isSelectAll);
      console.log(!this.isSelectAll);

      // if (this.isSelectAll) {
      //   //全部选中
      //   this.cartList.forEach((item) => {
      //     item.checked = false;
      //   });
      // } else {
      //   this.cartList, forEach((item.checked = true));
      // }
      // this.$store.dispatch("checkAll", !this.isCheckAll);
      // console.log("---");
    },
  },
  components: { checkButtom },
};
</script>

<style  scoped>
.bottombar {
  position: fixed;
  bottom: 70px;

  display: flex;

  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #ddd;
}
.bottombar .check-all {
  flex: 1;

  margin-left: 10px;

  display: flex;
}
.bottombar .check-all div:nth-child(1) {
  width: 22px;
  height: 22px;
  position: relative;
  top: 5px;
}

.bottombar .check-all div:nth-child(2) {
  font-size: 14px;
  margin-left: 3px;
  color: #666;
}

.total {
  flex: 3;
  color: #555;
  font-size: 18px;
}
.go {
  flex: 2;
  color: #fff;
  font-size: 16px;
  text-align: center;
  background-color: #ff5200;
}
</style>
