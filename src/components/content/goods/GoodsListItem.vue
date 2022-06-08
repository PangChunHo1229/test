<template>
  <div class="goods-item" @click="itemClick">
    <!-- <img :src="goodsItem.show.img" alt="" @load="imageLoad" /> -->
    <img :src="showImage" alt="" @load="imageLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    // 原生js监听图片： img.onload=func
    // vue监听图片  @load=""
    imageLoad() {
      // console.log("12");
      this.$bus.$emit("itemImageLoad");
      //  if (this.$route.path.indexOf("./home") !== -1) {
      //   this.$bus.$emit("homeItemImageLoad");
      // } else if (this.$route.path.indexOf("./detail")) {
      //   this.$bus.$emit("detailItemImageLoad");
      // }
    },
    itemClick() {
      // 动态路由id做法
      // console.log(this.goodsItem);
      // console.log(this.goodsItem.iid);

      this.$router.push("/detail/" + this.goodsItem.iid);

      // query做法
      // this.$router.push({
      //   path:"/detail",
      //   query:{

      //   }
      // });
    },
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    },
  },
};
</script>

<style >
.goods-item {
  padding-bottom: 40px;
  position: relative;

  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>