<template>
  <div class="checkButtom" :class="{ check: isChecked }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "checkButtom",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.checkButtom {
  border-radius: 50%;
  border: 2px solid #aaa;
}
.checkButtom img {
  width: 100%;
}
.check {
  border-color: red;
  background-color: red;
}
</style>