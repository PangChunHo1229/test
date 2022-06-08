<template>
  <div class="toast">
    <div v-show="isshow">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    // message: {
    //   type: String,
    //   default: "",
    // },
    // show: {
    //   type: Boolean,
    //   default: true,
    // },
  },
  components: {},
  data() {
    return {
      message: "",
      isshow: false,
    };
  },
  methods: {
    show(message, duration = 2000) {
      this.isshow = true;
      this.message = message;
      setTimeout(() => {
        this.isshow = false;
        this.message = "message";
      }, duration);
    },
  },
};
</script>

<style scoped>
@keyframes fadein {
  0% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.toast {
  position: fixed;
  /* top: 250px; */

  top: 10%;
  left: 50%;
  color: #Fff;
  /* transform: translate(-50%, -50%); */
  background-color: aqua;
  z-index: 999;
  animation: fadein 3s forwards;
}
</style>