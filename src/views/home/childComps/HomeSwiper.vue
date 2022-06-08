<template>
  <Swiper>
    <SwiperItem v-for="item in banners" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad" />
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: { Swiper, SwiperItem },
  data() {
    return {
      isLoad: false,
    };
  },
  methods: {
    imageLoad() {
      // console.log(111777);
      if (!this.isLoad) {
        this.$emit("swiperLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style >
</style>