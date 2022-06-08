<template>
  <div class="goods">
    <GoodsListItem
      v-for="(item, index) in goods"
      :key="index"
      :goodsItem="item"
    ></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: { GoodsListItem },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style >
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
</style>