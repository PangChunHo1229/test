<template>
  <div class="product-item">
    <div class="check">
      <checkButtom
        :is-checked="product.checked"
        @click.native="checkClick"
      ></checkButtom>
    </div>
    <!-- <div class="check">
      <div @click="check">
        <img src="~assets/img/cart/tick" alt="" />
      </div>
    </div> -->

    <!-- <div @click="toDetail" class="img-box"> -->
    <div class="img-box">
      <img :src="product.image" alt="" />
    </div>
    <div class="info-box">
      <div class="title text-more">{{ product.title }}</div>
      <div class="desc text-more">{{ product.desc }}</div>
      <div class="price">
        <div>￥{{ product.price }}</div>
        <div>x{{ product.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import checkButtom from "components/content/checkButtom/checkButtom";

export default {
  name: "CartListItem",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    // toDetail() {
    //   this.$router.push("/detail/" + this.goods.iid);
    // },
    checkClick() {
      // this.product.checked = !this.product.checked;
      this.$store.dispatch("checkClick", this.product);
      console.log(this.product.checked);
    },
  },
  components: {
    checkButtom,
  },
};
</script>

<style scoped>
.product-item {
  display: flex;
  padding: 10px;
}
.product-item .check {
  width: 50px;
  position: relative;
}
.product-item .check div {
  height: 26px;
  width: 26px;
  border-radius: 26px;
  outline: 1px solid #ccc;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 6px;
}
.product-item .check div img {
  width: 26px;
}

.img-box {
  height: 110px;
  overflow: hidden;
  border-radius: 10px;
}
.img-box img {
  width: 90px;
}

.info-box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 10px;
  width: 195px;
}
.info-box .title {
  font-size: 20px;
  color: #444;
}
.info-box .desc {
  font-size: 16px;
  color: #555;
}

.price {
  font-size: 21px;
}
.price div:nth-child(1) {
  float: left;
  color: #f86024;
}
.price div:nth-child(2) {
  float: right;
}
</style>
