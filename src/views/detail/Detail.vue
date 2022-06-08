<template>
  <div id="detail">
    <DetailNavBar
      class="detailnav"
      @titleClick="titleClick"
      ref="detailnav"
    ></DetailNavBar>
    <!-- <DetailSwiper :topImages="topImages"></DetailSwiper> -->
    <Scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3">
      <!-- <div>
        <ul>
          <li v-for="(item, index) in $store.state.cartList" :key="index">
            {{ item }}
          </li>
        </ul>
      </div> -->
      <toast :message="message" :show="isMessageShow"></toast>

      <DetailSwiper :topImages="topImages"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo
        :detailInfo="detailInfo"
        @imagesLoad="imagesLoad"
      ></DetailGoodsInfo>
      <DetailGoodsParams :goodsParams="goodsParams" ref="paramsCpn" />
      <DetailGoodsComments :rates="rates" ref="commentsCpn" />
      <GoodsList
        :goods="recommendGoods"
        title="更多相似推荐"
        ref="recommendCpn"
      />
    </Scroll>
    <DetailBottomBar @addCart="addToCart" />
    <BackTop
      @click.native="backClick"
      v-show="isShowBackTop"
      class="backtop"
    ></BackTop>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailGoodsParams from "./childComps/DetailGoodsParams.vue";
import DetailGoodsComments from "./childComps/DetailGoodsComments.vue";
import DetailBottomBar from "./childComps/DetailBottomBar";
import GoodsList from "components/content/goods/GoodsList.vue";

import toast from "components/common/toast/Toast";

import Scroll from "components/content/Scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParams,
  getRecommend,
} from "network/detail";

import { throttle, debounce } from "@/common/utils.js";

import { mapActions } from "vuex";

export default {
  name: "Detail",
  props: {},
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailGoodsParams,
    DetailGoodsComments,
    DetailBottomBar,
    GoodsList,
    Scroll,
    BackTop,
    toast,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParams: {},
      rates: {},
      recommendGoods: [],

      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,

      isShowBackTop: false,
      isMessageShow: false,
      message: "",
    };
  },
  methods: {
    imagesLoad() {
      this.$refs.scroll.refresh();
      // console.log("---==--");
      this.getThemeTopY();
    },
    contentScroll(position) {
      // console.log(position);
      // 1. 获取y值
      const positionY = -position.y;

      // 2. positionY和主题theme中的y对比
      // [0, 15983, 17306, 17535, __ob__: Observer]
      // positionY在[0，15983] index=0
      // positionY在[15983，17306] index=1
      // positionY在[17306，17535] index=2
      // positionY在[17535，--] index=3

      // for in对象返回key 数组index
      // for of 对象数组返回value
      let length = this.themeTopYs.length;
      for (let i = 0; i < length; i++) {
        // console.log(i);0 1 2 3 但是是str类型
        // console.log(this.themeTopYs[i]);
        // console.log(length);4

        // this.currentIndex !== i 防止赋值过于频繁

        if (
          this.currentIndex !== i &&
          ((i < length - 1 &&
            positionY >= this.themeTopYs[i] &&
            positionY < this.themeTopYs[i + 1]) ||
            (i === length - 1 && positionY >= this.themeTopYs[i]))
        ) {
          // console.log(i);
          this.currentIndex = i;
          // console.log(this.currentIndex);
          this.$refs.detailnav.currentIndex = this.currentIndex;
        }
      }

      // 3. 是否showbacktop
      this.isShowBackTop = Math.abs(position.y) > 1000;
    },
    backClick() {
      // console.log("backClick");
      // this.$refs.scroll 拿到的是组件
      // this.$refs.Scroll.message
      // @click.native 点击了之后 通过它上面有ref="scroll"绑定组件 然后调用这个方法
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    ...mapActions(["addCart"]),
    addToCart() {
      // 1. 获取商品信息
      // console.log("123");
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // this.msgKey++;
      // this.isMessageShow = true;

      // 2. 将商品添加到购物车
      // this.$store.dispatch("addCart", product).then((res) => {
      this.addCart(product).then((res) => {
        // mapActions之后可用
        // this.isMessageShow = true;
        // this.message = res;
        this.$toast.show(res, 3000);
        console.log(res);
        // console.log(this.$toast);
      });
    },
    // addToCart: throttle(function () {
    //   // const product = {};
    //   // product.image = this.topImages[0];
    //   // product.title = this.goods.title;
    //   // product.desc = this.goods.desc;
    //   // product.price = this.goods.realPrice;
    //   // product.iid = this.iid;
    //   // this.$store.dispatch("addToCart", product);
    //   // this.msgKey++;
    //   // this.isMessageShow = true;
    // }, 2000),

    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
  },
  created() {
    // console.log(this.$route.params);
    // console.log(this.$route.params.iid);
    //1. 保存传入的iid
    this.iid = this.$route.params.iid;

    //2. 根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      // console.log(res);
      const data = res.result;
      // 1. 获取顶部图片
      // console.log(res.result.itemInfo.topImages);

      this.topImages = res.result.itemInfo.topImages;

      // 2. 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.service
      );
      // console.log(this.goods);

      // 3. 创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);

      // 4. 获取商品详细信息
      this.detailInfo = data.detailInfo;

      // 5. 获取参数信息
      this.goodsParams = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );

      // 6. 商品评论信息
      this.rates = data.rate;

      // 1. 第一次获取 ，在mount的时候获取不到$el
      // this.themeTopYs = [];
      //   this.themeTopYs.push(0);
      // this.themeTopYs.push(this.$refs.paramsCpn.$el.offsetTop);
      // this.themeTopYs.push(this.$refs.commentsCpn.$el.offsetTop);
      // this.themeTopYs.push(this.$refs.recommendCpn.$el.offsetTop);
      // 2. 第二次获取 值不对 图片没加载完 所以没计算在内
      // this.$nextTick(() => {
      //   this.themeTopYs = [];
      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.paramsCpn.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.commentsCpn.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.recommendCpn.$el.offsetTop);
      // });
    });

    // 3. 请求推荐数据
    getRecommend().then((res) => {
      this.recommendGoods = res.data.list;
      // console.log(this.recommendGoods);
    });

    //  4. 给getThemeTopY赋值
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.paramsCpn.$el.offsetTop);
      this.themeTopYs.push(this.$refs.commentsCpn.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommendCpn.$el.offsetTop);
      console.log(this.themeTopYs);
    }, 100);
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
  padding-bottom: 70px;
}
.detailnav {
  position: relative;
  background-color: #fff;
  z-index: 9;
}
.content {
  height: calc(100% - 44px);
  overflow: hidden;
  /* overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0; */
}
.backtop {
  bottom: 70px;
}
</style>



// @color-tint: #fe647f;
// @navbar-height: 50px;
// @color-text: #515151;
// @color-bg: #f2f2f2;