<template>
  <div class="feature">
    <!-- <a href="https://act.mogujie.com/zzlx67">
      <img src="~assets/img/home/recommend_bg.jpg" alt="" />
    </a> -->
    <div class="feature-title"><h4>每日推荐</h4></div>
    <div v-for="item in recommendss" :key="item.title" class="feature-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureView",
  props: {
    recommendss: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style >
.feature {
  display: flex;
  text-align: center;

  padding: 10px 0 10px;
  border-bottom: 10px solid #eee;
  flex-wrap: wrap;
  z-index: 8;
}
.feature-title {
  width: 100%;
  height: 20px;
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
}
.feature-item {
  flex: 1;
  margin-top: 5px;
  font-size: 12px;
}
.feature-item img {
  width: 70%;
  height: 70%;
  margin-bottom: 10px;
}
</style>