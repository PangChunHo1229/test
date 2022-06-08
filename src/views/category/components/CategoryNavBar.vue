<template>
  <NavBar class="navbar">
    <template #center>分类</template>
  </NavBar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "CategoryNavBar",
  components: {
    NavBar,
  },
};
</script>

<style  scoped>
.navbar {
  background-color: #fe647f;
  color: #fff;
}
</style>
