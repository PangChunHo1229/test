<template>
  <!-- <div class="wrapper" ref="aaa"> -->
  <div></div>
</template>

<script>
// import BScroll from "better-scroll";

export default {
  name: "Category",
  props: {},
  components: {},
  data() {
    return {
      scroll: null,
    };
  },
  methods: {},
  // vue组件创建完之后就是created
  // 挂载完之后就到了mounted
  mounted() {
    // //  new BScroll(".wrapper", {});
    // this.scroll = new BScroll(document.querySelector(".wrapper"), {
    //   probeType: 3,
    //   pullUpLoad: true,
    // });
    // this.scroll.on("scroll", (position) => {
    //   console.log(position);
    // });
    // this.scroll.on("pullingUp", () => {
    //   console.log("123");
    // });
  },
};
</script>
 
<style >
/* .wrapper {
  height: 150px;
  background-color: pink;
  overflow: hidden;
} */
</style>