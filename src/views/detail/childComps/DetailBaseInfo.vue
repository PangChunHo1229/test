<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other" v-if="goods.columns">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service" v-if="goods.services">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      ></span>
      <img :src="goods.services[index - 1].icon" alt="" />
      <span>{{ goods.services[index - 1].name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
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
  methods: {},
};
</script>

<style  scoped>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.info-title {
  color: #222;
}
.info-price .n-price {
  font-size: 24px;
  color: var(--color-high-text);
}
.info-price .o-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.info-price .discount {
  background-color: var(--color-high-text);
  color: #fff;
  font-size: 18px;
  padding: 0 5px;
  border-radius: 10px;
  position: relative;
  bottom: 10px;
}
.info-other {
  padding: 10px 0;
  font-size: 17px;
  color: #8c8c8c;
  display: flex;
  border-bottom: 5px solid #fff;
}
.info-other span {
  flex: 1;
  text-align: center;
}
.services {
  display: flex;
  border-bottom: 5px solid #fff;
}
.services div {
  padding: 10px;
  height: 80px;
}
.services img {
  height: 20px;
}
.services span {
  font-size: 18px;
}
.services span :nth-child(1) {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.services span :nth-child(2) {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>