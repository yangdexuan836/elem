<template>
	<div id="listBox">

		<div id="tuijian">
			<span>—</span>
			<b>推荐商家</b>
			<span>—</span>
		</div>

		<div id="shop">
			<ul id="shoplist">
				<li v-for="item in list">
					<img :src="makeImageUrl(item.restaurant.image_path)" @click="goShopList(item.restaurant.id)">
					<div class="list-right">
						<p class="name" @click="goShopList(item.restaurant.id)">
							<strong>
								<span v-if="item.restaurant.is_premium" class="one">品牌</span>
								<b>{{item.restaurant.name}}</b>
							</strong>
							<em v-for="icon in item.restaurant.supports">{{icon.icon_name}}</em>
						</p>
						<p class="detail" @click="goShopList(item.restaurant.id)">
							<span>
								<i>★★★★★</i>
								<b>{{item.restaurant.rating}}</b>
								<strong>月售{{item.restaurant.recent_order_num}}单</strong>
							</span>
							<em v-if="item.restaurant.delivery_mode">蜂鸟专送</em>
						</p>
						<p class="send" v-for="money in item.restaurant.piecewise_agent_fee.rules" @click="goShopList(item.restaurant.id)"> 
							<span>￥{{money.price}}起送 | 配送费￥{{money.fee}}</span>
							<span>{{((item.restaurant.distance)/1000).toFixed(2)}}km | {{item.restaurant.order_lead_time}}分钟</span>
						</p>
						<p class="images" v-if="item.restaurant.recommend.reason == '口碑人气好店'" @click="goShopList(item.restaurant.id)">
							<img src="../.././../static/images/icon.png">
							<span>口碑人气好店</span>
						</p>
						<div class="tips">
							<div class="tipLeft" @click="goShopList(item.restaurant.id)">
								<i v-for="tip in item.restaurant.activities">
									<b :style="'background:'+ getColor(tip.icon_color)">{{tip.icon_name}}</b>
									<span>{{tip.tips}}</span>
								</i>
							</div>
							<div class="tipRight">
								{{item.restaurant.activities.length}}个活动
								<i class="iconfont zhuan">&#xf034e;</i>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div id="loading">
			<p><mt-spinner type="fading-circle" color="#333" :size="15"></mt-spinner></p>
			<span>正在加载...</span>
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
			list : [],
			isGeting : false
		}
	},
	mounted(){
		var count = 0
		this.getAjax(count);
	},
	updated(){
		var that = this;
	    $(window).scroll(function(){  
	        //下面这句主要是获取网页的总高度，主要是考虑兼容性所以把Ie支持的documentElement也写了，这个方法至少支持IE8  
	        var htmlHeight=document.body.scrollHeight||document.documentElement.scrollHeight;
	        // console.log(htmlHeight)  
	        //clientHeight是网页在浏览器中的可视高度，  
	        var clientHeight=document.body.clientHeight||document.documentElement.clientHeight; 
	        // console.log(clientHeight)
	        //scrollTop是浏览器滚动条的top位置，  
	        var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
	        // console.log(scrollTop)
	        // console.log(Math.round(scrollTop + clientHeight))
	        var Num = Math.round(scrollTop + clientHeight);
	        //通过判断滚动条的top位置与可视网页之和与整个网页的高度是否相等来决定是否加载内容；
	        // console.log(Num)  
	        // console.log(htmlHeight)
	        htmlHeight = htmlHeight - 5;  
	        var count = 0;
	        if( Num > htmlHeight ){  
	            that.getAjax(count);  
	        }  
    	})
	},
	methods : {
	    makeImageUrl(imgPath){
		    var part1 = imgPath.substr(0,1);
		    var part2 = imgPath.substr(1,2);
		    var part3 = imgPath.substr(3);
		    var part4 = part3.substr(29);
		    // console.log(imgPath)
		    // console.log(part1,part2,part3,part4);
		    return `//fuss10.elemecdn.com/${part1}/${part2}/${part3}.${part4}?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/`
	    },
	    getColor(Color){
	    	// console.log(Color)
	    	return "#"+Color;
	    },
	    getAjax(count){
	    	// console.log("getting!!!")
	    	if(this.isGeting) {
	    		return;
	    	}else{
		    	this.isGeting = true;
		    	count += 8;
		    	axios.get("/restapi/shopping/v3/restaurants?latitude=39.90469&longitude=116.407173&offset="+count+"&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5")
			    .then((res)=>{
			      // console.log(res);
			      this.list = this.list.concat(res.data.items);
			      // console.log(this.list)
	      		  this.isGeting = false;
			      this.$nextTick(function(){
			      	$(".tipRight").parents("li").find(".tipLeft>i:lt(1)").css("display","flex");
					$(".tipRight").parents("li").find(".tipLeft>i:gt(1)").css("display","none");
			      	var flag = true;
			      	$(".tipRight").click(function(){
			      		if(flag){
			      			$(this).parents("li").find(".tipLeft>i").css("display","flex");
				      		flag = false;
			      		}else{
				      		$(this).parents("li").find(".tipLeft>i:lt(1)").css("display","flex");
				      		$(this).parents("li").find(".tipLeft>i:gt(1)").css("display","none");
			      			flag = true;
			      		}
			      	})
			      })
		   		})
	    	}
	    },
	    goShopList(id){
	    	this.$router.history.push({name:"ShopList",params:{slid: id}});
	    	// console.log(id)
	    }
	}
}


</script>

<style scoped>
#tuijian{
	display: flex;
	justify-content: center;
	margin-top: 0.3rem;
	margin-bottom:0.05rem;
}

#tuijian>span{
	color:#999;
	line-height: 0.15rem;
}
#tuijian>b{
	font-size: 0.15rem;
	font-weight:500;
	padding:0 0.1rem;
}

#shop{
	margin-left:0.1rem;
	margin-right:0.1rem;
}

#shoplist{
	display: flex;
	flex-direction: column;
}

#shoplist li{
	display: flex;
	justify-content: space-between;
	padding-top: 0.15rem;
}

#shoplist li>img{
	width:0.586rem;
	height:0.586rem;
	margin-right: 0.1rem;
}
.list-right{
	flex: 1;
	padding-bottom: 0.081rem;
}
.name{
	display: flex;
	margin-top: -0.12rem;
	align-items: center;
	justify-content: space-between;
}
.name strong{
	font-style: normal;
}
.name span{
	display: inline-block;
	white-space: nowrap;
	background: #ffe339;
	font-weight: 700;
	font-size: 0.11rem;
	color:#333;
	border-radius: 2px;
}
.name b{
	font-size: 0.15rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	display: inline-block;
	width:2.20rem;
	vertical-align: middle;
}
.name em{
	font-style: normal;
	font-size: 0.1rem;
	border:1px solid #ececec;
	border-radius: 1px;
	padding-left:1px;
	padding-right:1px;
	color:#999;
}
.detail{
	display: flex;
	justify-content: space-between;
	margin-top: -0.08rem;
	align-items: center;
}
.detail i{
	color:#ffe339;
	font-style: normal;
	font-size: 0.15rem;
}
.detail b{
	font-style: normal;
	font-size: 0.1rem;
	color:#666;
	font-weight: 400;
}
.detail strong{
	font-style: normal;
	font-size: 0.1rem;
	color:#666;
	font-weight: 400;
}
.detail em{
	display: inline-block;
	background: #0097ff;
	color:#fff;
	font-style: normal;
	padding-left: 0.01rem;
	padding-right: 0.01rem;
	font-size: 0.1rem;
	margin-top: 0.1rem;
	border-radius: 1px;
	margin-right: 0.05rem;
}
.send{
	display: flex;
	justify-content: space-between;
	line-height: 0.3rem;
}
.send span{
	color:#666;
	font-size: 0.1rem;
}
.images{
	margin-top: -0.15rem;
	margin-bottom: -0.05rem;
	padding-bottom: 0.1rem;
}
.images img{
	width:0.1rem;
	height:0.1rem;
	display: inline-block;
	margin-right: -5px;
}
.images span{
	font-size: 0.1rem;
	color:rgb(232,71,11);
}

.tips{
	display: flex;
	justify-content: space-between;
	border-top:1px dashed #ececec;
	padding-top: 0.1rem;
}
.tipLeft{
	flex: 0.95;
}
.tipRight{
	font-size: 0.1rem;
	width:0.6rem;
}
.tipRight .zhuan{
	font-size: 0.1rem;
	margin-left: 0.05rem;
	line-height: 0.1rem;
}
.tipLeft b{
	font-style: normal;
	font-size: 0.1rem;
	display: inline-block;
	padding:0.015rem;
	border-radius: 2px;
	margin-bottom: 0.05rem;
	margin-right:0.05rem;
	color:#fff;
	opacity:0.9;
}
.tipLeft span{
	font-size: 0.1rem;
	color:#666;
	overflow: hidden;
	text-overflow: ellipsis;
	width:2rem;
	white-space: nowrap;
}
.tipLeft i{
	font-style: normal;
	display: flex;
	margin:0.02rem 0;
}
#loading{
	width: 100%;
	display: flex;
	justify-content: center;
}
#loading p{
	display: inline-block;
	margin-right: 0.1rem;
}
#loading span{
	font-size: 0.10rem;
	line-height: 0.15rem;
}
#listBox{
	padding-bottom: 0.3rem;
}
</style>
