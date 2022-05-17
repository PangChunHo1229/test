<template>
  <Swiper>
    <SwiperItem v-for="item in banners" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" alt="" />
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
    return {};
  },
  methods: {},
};
</script>

<style >
</style>