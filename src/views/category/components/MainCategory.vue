<template>
  <div class="main-scroll">
    <div class="main-vscroll" ref="mainScroll">
      <div class="main-category">
        <ul>
          <li
            v-for="(item, index) in categoryList"
            :key="item.maitKey"
            @click="change(index, item.maitKey)"
            :class="{ active: index === currentIndex }"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainCategory",
  props: {
    categoryList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
  data() {
    return {
      currentIndex: 0,
    };
  },
  created() {
    // TODO 延迟三秒发送事件，防止 data 此时还未得到数据
    setTimeout(() => {
      this.$emit("change", this.categoryList[0].maitKey);
    }, 300);
  },
  methods: {
    change(index, key) {
      this.currentIndex = index;
      this.$emit("change", key);
    },
  },
};
</script>

<style  scoped>
.active {
  color: #fe647f;
  background-color: #f4f4f4;
}
.main-scroll {
  flex: 1;
  border-right: 1px solid #ddd;
  height: calc(100vh - 70px);
  margin-top: 50px;
}
.main-category {
  overflow: hidden;
  text-align: center;
}
.main-category ul li {
  height: 40px;
  width: 100%;
  line-height: 40px;
  font-size: 18px;
}
</style>
