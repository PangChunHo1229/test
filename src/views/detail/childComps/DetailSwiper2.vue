<template>
  <div class="block">
    <el-carousel trigger="click" height="500px">
      <el-carousel-item v-for="item in topImages" :key="item">
        <img :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
  <!-- <template>
		<el-carousel :interval="4000" type="card" arrow="never" ref="carousel">
			<el-carousel-item v-for="item in carouseData" :key="item.id">
				<img class="element-img" alt="" :src="item.url">
			</el-carousel-item>
		</el-carousel>
	</template> -->
</template>
<script>
// import { Swiper, SwiperItem } from "components/common/swiper";
// import Swiper from "../../../components/common/swiper/Swiper.vue";
//  import Swiper from "../../../components/common/swiper/Swiper.vue";

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
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style >
/* .el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
</style>

// mounted:{
// 		this.slideBanner();
// 	},
// 	methods:function(){
// 		startAuto:function(){
// 			if(this.autoplay == false){
// 				this.autoplay = true;
// 			}
// 		},
// 		stopAuto:function(){
// 			if(this.autoplay == true){
// 				this.autoplay = false;
// 			}
// 		},
// 		slideBanner:function(){
// 			//选中item的盒子
// 			var box = document.querySelector('.el-carousel__container');
// 		    //手指起点X坐标
// 		    var startPoint = 0;
// 			//手指滑动重点X坐标
// 			var stopPoint = 0;
			
// 			//重置坐标
// 			var resetPoint =  function(){
// 				startPoint = 0;
// 				stopPoint = 0;
// 			}
		    
// 		    //手指按下
// 		    box.addEventListener("touchstart",function(e){
// 		    	//手指按下的时候停止自动轮播
// 		    	vm.stopAuto();
// 		    	//手指点击位置的X坐标
// 		        startPoint = e.changedTouches[0].pageX;
// 		    });
// 		    //手指滑动
// 		    box.addEventListener("touchmove",function(e){
// 		    	//手指滑动后终点位置X的坐标
// 		        stopPoint = e.changedTouches[0].pageX;
// 		    });
// 		    //当手指抬起的时候，判断图片滚动离左右的距离
// 		   	box.addEventListener("touchend",function(e){
// 		   		console.log("1："+startPoint);
// 		   		console.log("2："+stopPoint);
// 				if(stopPoint == 0 || startPoint - stopPoint == 0){
// 					resetPoint();
// 		   			return;
// 		   		}
// 		   		if(startPoint - stopPoint > 0){
// 		   			resetPoint();
// 		   			vm.$refs.carousel.next();
// 		   			return;
// 		   		}
// 		   		if(startPoint - stopPoint < 0){
// 		   			resetPoint();
// 		   			vm.$refs.carousel.prev();
// 		   			return;
// 		   		}
// 		    });
// 		}
// 	}
