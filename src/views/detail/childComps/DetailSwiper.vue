<template>
  <div class="detail-swiper">
    <swiper class="swiperr">
      <SwiperItem v-for="item in topImages" :key="item" class="swiper-item">
        <img :src="item" alt="" />
      </SwiperItem>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
// import Swiper from "../../../components/common/swiper/Swiper.vue";

export default {
  name: "DetailSwiper",
  props: {
    topImages: {
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
.swiperr {
  height: 300px;
}
</style>