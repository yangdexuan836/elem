<template>
	<div>
		<div id="banner">
			<div class="swiper-container">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide" v-for="item in list">
			        	<a :href="href">
			        		<img :src="makeImgSrc(item.image_hash)" class="bannerImg">
			        	</a>
			        </div>
			    </div>
			    <!-- 如果需要分页器 -->
			    <div class="swiper-pagination"></div>
			</div>
		</div>
	</div>
</template>


<script>
import axios from 'axios'
import Swiper from 'swiper'
import "../../assets/swiper-4.1.6.min.js"
import "../../assets/swiper-4.1.6.min.css"

export default {
	name: 'Index',
	data () {
		return {
			href : "javascript:",
			list : []
		}
	},
	mounted(){
		axios.get("/restapi/shopping/v2/entries?latitude=39.90469&longitude=116.407173&templates%5B%5D=big_sale_promotion_template")
	    .then((res)=>{
	      // console.log(res.data[0].entries);
	      this.list = res.data[0].entries;
	      // console.log(this.list[0].image_hash)
	      // console.log(this.list[1].image_hash)
	      this.$nextTick(function(){
			var mySwiper = new Swiper ('.swiper-container', {
				    direction: 'horizontal',
				    loop: true,
				    autoplay : true,

					// 如果需要分页器
				    pagination: {
				      el: '.swiper-pagination'
				    },
			  });
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
	        return `//fuss10.elemecdn.com/${part1}/${part2}/${part3}.${part4}?imageMogr/format/webp/`
		}
	}
}



</script>

<style>
	#banner{
		height:1.05rem;
		width:100%;
	}
	.bannerImg{
		width: 100%;
	}
	.swiper-pagination-bullet-active{
		background: #666;
		width:4px;
		height:4px;
	}
	.swiper-pagination-bullet{
		width:4px;
		height:4px;
	}
</style>
