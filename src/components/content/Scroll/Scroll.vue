<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  data() {
    return {
      scroll: null,
      message: "hhhh",
    };
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    // scrollTo2(x, y) {
    //   this.scroll && this.scroll.scrollTo(x, y);
    // },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      // console.log("111");

      this.scroll && this.scroll.refresh();
    },
  },
  mounted() {
    // 1. 创建BScroll对象
    setTimeout(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        mouseWheel: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
      });
      // this.scroll.scrollTo(0, 0);

      // 2. 监听滚动的位置
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on("scroll", (position) => {
          // console.log(position);
          this.$emit("scroll", position);
        });
      }
      // 3. 监听上拉事件
      // this.scroll.on("pullingUp", () => {
      //   // console.log("111");
      //   this.$emit("pullingUp");
      // });

      // 3. 监听scroll滚动到底部
      if (this.pullUpLoad) {
        this.scroll.on("pullingUp", () => {
          // console.log("222");
          this.$emit("pullingUp");
        });
      }
    }, 300);
  },
};
</script>

<style >
</style>