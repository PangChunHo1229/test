<template>
  <div class="sub-scroll">
    <div ref="subScroll">
      <ul class="item-container">
        <li v-for="item in subCategoryList" :key="item.acm">
          <img :src="item.image" alt="" />
          <p>
            {{ item.title }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubCategory",
  props: {
    subCategoryList: {
      type: Array,
      default() {
        return {};
      },
    },
  },
  components: {},
};
</script>

<style scoped>
.sub-scroll {
  flex: 3;
  width: 100%;
  position: relative;
}
.item-container {
  width: 100%;
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
}
.item-container li {
  text-align: center;
  margin-top: 30px;
}
.item-container li img {
  width: 50px;
}
.item-container li p {
  margin-top: 10px;
  font-size: 15px;
}
</style>
