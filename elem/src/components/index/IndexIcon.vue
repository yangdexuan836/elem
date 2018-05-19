<template>
	<div id="indexIcon">
		<!-- <div class="swiper-container setter"> -->
		    <!-- <div class="swiper-wrapper"> -->
		        <!-- <div class="swiper-slide"> -->
			        <div class="index">
			        	<a href="javascript:" v-for="item in list.slice(0,10)">
			        		<img :src="makeImgSrc(item.image_hash)">
			        		<span>{{item.name}}</span>
			        	</a>
			        </div>
		        <!-- </div> -->
		        <!-- <div class="swiper-slide">
		        	 <div class="index">
			        	<a href="javascript:" v-for="item in list.slice(10)">
			        		<img :src="makeImgSrc(item.image_hash)">
			        		<span>{{item.name}}</span>
			        	</a>
			        </div>
		        </div> -->
		    <!-- </div> -->
		    <!-- 如果需要分页器 -->
		    <!-- <div class="swiper-pagination"></div> -->
		<!-- </div> -->
	</div>
</template>


<script>
import axios from 'axios'
import "../../assets/swiper-4.1.6.min.js"
import "../../assets/swiper-4.1.6.min.css"
import Swiper from 'swiper'

export default {
	name: 'Index',
	data () {
		return {
			list : []
		}
	},
	mounted(){
		axios.get("/restapi/shopping/openapi/entries?latitude=39.90469&longitude=116.407173&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template")
	    .then((res)=>{
	      // console.log(res);
	      this.list = res.data[0].entries;
	      // console.log(this.list)
	      this.$nextTick(function(){
	      	
	      })
	    })
	},
	methods : {
		makeImgSrc(imgPath){
			var part1 = imgPath.substr(0,1);
	        var part2 = imgPath.substr(1,2);
	        var part3 = imgPath.substr(3);
	        var part4 = part3.substr(29);
	        // console.log(imgPath)
	        // console.log(part1,part2,part3,part4);
	        return `//fuss10.elemecdn.com/${part1}/${part2}/${part3}.${part4}?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/`
		}
	}
}

// window.onload = function(){

// var mySwiper = new Swiper ('.swiper-container', {
// 			    direction: 'horizontal',
// 			    // loop: false,

// 				// 如果需要分页器
// 			    pagination: {
// 			      el: '.swiper-pagination'
// 			    },
// 		  });
// }


</script>

<style scoped>
	#indexIcon{
		height:1.775rem;
		padding-top:0.1rem;
	}
	.index{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	img{
		width: 0.45rem;
		height:0.45rem;
		margin-bottom: 0.1rem;
	}
	a{
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
		width:20%;
		padding-bottom: 0.1rem;
	}
	span{
		color:#333;
		font-size: 0.11rem;
	}
	.setter{
		padding-bottom: 0.2rem;
	}
</style>
