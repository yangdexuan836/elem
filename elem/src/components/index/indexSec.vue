<template>
	<div>
		<div id="newuser">
			<img :src="newuser"/>
		</div>

		<div id="taocan">
			<div class="main">
				<b>品质套餐</b>
				<span>搭配齐全吃的好</span>
				<a href="javascipt:">立即抢购 ></a>
			</div>
				<img src="../../../static/images/taocan.png" />
		</div>

		<div id="zhiding">
			<i class="iconfont zhiding">&#xe678;</i>
		</div>
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
			newuser : "https://fuss10.elemecdn.com/3/c8/45b2ec2855ed55d90c45bf9b07abbpng.png?imageMogr/format/webp/thumbnail/!710x178r/gravity/Center/crop/710x178/",
			
		}
	},
	mounted(){
		var height = $("#newuser").offset().top;

		// console.log($("#newuser").offset())			
		$(window).scroll(function(){
			// console.log( height )
			if($(window).scrollTop()>height){
			    $("#zhiding").css("display","block");
			    $("#zhiding").click(function(){
			    	$(window).scrollTop(0)
			    })
			}else{
			    $("#zhiding").css("display","none")
			}    
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


</script>

<style scoped>
	#newuser{
		margin-left:0.1rem;
		margin-right:0.1rem;
		margin-top: -0.1rem;
	}
	#newuser>img{
		width:100%;
	}
	#taocan{
		height:1rem;
		display: flex;
		justify-content:space-between;
		background: url(../../../static/images/taocanbg.png) repeat-x left top;
		margin-left:0.1rem;
		margin-right:0.1rem;
		padding-left: 0.1rem;
		padding-top: 0.2rem;
	}
	.main{
		display: flex;
		flex-direction: column;
	}
	.main b{
		font-size: 0.195rem;
		font-weight: 700;
	}
	.main span{
		font-size: 0.13rem;
		line-height: 0.4rem;
	}
	.main a{
		color:#af8260;
		font-size: 0.12rem;
	}
	#taocan img{
		width:1.415rem;
		height:0.94rem;
	}

	#zhiding{
		width: 0.4rem;
		height: 0.4rem;
		border:1px solid #999;
		text-align: center;
		border-radius: 50%;
		position: fixed;
		right:0.15rem;
		bottom:0.7rem;
		z-index: 999;
		background: #fff;
		display: none;
	}
	#zhiding i{
		font-size: 0.2rem;
		line-height: 0.45rem;
		color:#999;
	}
</style>
