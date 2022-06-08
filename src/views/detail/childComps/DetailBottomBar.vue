<template>
  <div class="bottom-bar">
    <div class="left">
      <div>
        <span class="icon-1"></span>
        <span>客服</span>
      </div>
      <div>
        <span class="icon-2"></span>
        <span>店铺</span>
      </div>
      <div>
        <span class="icon-uniE900"></span>
        <span>收藏</span>
      </div>
    </div>
    <div class="right">
      <div @click="addToCart">加入购物车</div>
      <div>购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit("addCart");
    },
  },
};
</script>

<style  scoped>
.bottom-bar {
  height: 70px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
}
.left,
.right {
  display: flex;
  flex: 1;
}
.left div,
.right div {
  flex: 1;
}

.left {
  color: #555;
}
.left div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.left div span:nth-child(2) {
  font-size: 16px;
  margin-top: 5px;
}

.right {
  font-size: 18px;
  display: flex;
}
.right div {
  flex: 1;
  text-align: center;
  line-height: 70px;
}
.right div:nth-child(1) {
  color: #333;
  background-color: #ffde10;
}
.right div:nth-child(2) {
  color: #fff;
  background-color: #fe647f;
}
</style>
