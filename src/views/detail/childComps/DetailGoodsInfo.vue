<template>
  <div class="detail-info">
    <header v-if="detailInfo.desc">
      <div class="top"></div>
      <div class="middle">{{ detailInfo.desc }}</div>
      <div class="bottom"></div>
    </header>
    <main>
      <header v-if="detailInfo.detailImage">{{ title }}</header>
      <section v-if="detailInfo.detailImage">
        <img
          @load="imagesLoad"
          v-for="(item, index) in images"
          :src="item"
          :key="index"
        />
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0,
    };
  },
  computed: {
    images() {
      return this.detailInfo.detailImage[0].list;
    },
    title() {
      return this.detailInfo.detailImage[0].key;
    },
  },
  methods: {
    // TIPS 判断所有图片加载完才发送事件， 那么就只用进行一次回调，以便于 Detial 组件正确的获取 offsetTop
    imagesLoad() {
      // this.counter+=1
      // if(this.counter===this.imagesLength)相当于这两行
      // if (++this.counter === this.imagesLength) {
      //   this.$emit("imagesLoad");
      // }
      this.$emit("imagesLoad");
      // console.log("-----");
    },
  },
  watch: {
    detailInfo() {
      this.imagesLength = this.detailInfo.detailImage[0].list.legth;
    },
  },
};
</script>

<style scoped>
.detail-info header {
  padding: 20px;
}

.detail-info header .middle {
  padding: 15px 0;
  font-size: 20px;
  color: #444;
}
.detail-info header .top {
  height: 1px;
  width: 100px;
  background-color: #333;
}
.top ::before {
  content: "";
  display: block;
  height: 6px;
  width: 6px;
  background-color: #444;
  position: relative;
  bottom: 3px;
}

.detail-info header .bottom {
  height: 1px;
  width: 100px;
  background-color: #333;
  position: absolute;
  right: 20px;
}
.bottom ::after {
  content: "";
  display: block;
  height: 6px;
  width: 6px;
  background-color: #444;
  position: relative;
  bottom: 3px;
  left: 94px;
}

main header {
  font-size: 20px;
  color: #333;
}
main section img {
  width: 100%;
}
</style>
