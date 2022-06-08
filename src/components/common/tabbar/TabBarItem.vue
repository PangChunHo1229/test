<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    itemClick() {
      // this.$router.push(this.path).catch((err) => err); 未解决 'catch' of undefined"
      this.$router.push(this.path);
      // this.$router.replace(this.path);  √
    },
  },
  computed: {
    isActive() {
      // 判断当前活跃的route是否包含this.path 包含时为true
      return this.$route.path === this.path;
      // return this.$route.path.includes(this.path)  √
      // return this.$route.path.indexOf(this.path) !==-1  √
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
};
</script>

<style >
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>