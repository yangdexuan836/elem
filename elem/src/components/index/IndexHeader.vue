<template>
	<div id="header">
		<div id="top">
			<i class="iconfont font dingwei" v-html="icon['dingwei']"></i>
			<p class="place">{{position}}</p>
			<i class="iconfont icon" v-html="icon['select']"></i>
		</div>
		<div id="searchArea">
			<a :href="href">
				<i class="iconfont" v-html="icon['search']"></i>
				搜索商家、商品名称
			</a>
		</div>
	</div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'Index',
  data () {
    return {
    	icon : {
			dingwei : "&#xe60d;",
			select : "&#xf034e;",
			search : "&#xe621;",
			shouye : "&#xe722;",
			find : "&#xe746;",
			dingdan : "&#xe652;",
			me : "&#xe622;"
		},
		position : "",
		href : "javascript:"
    }
  },
  mounted(){
  	axios.get("/restapi/bgs/poi/reverse_geo_coding?latitude=39.90469&longitude=116.407173").then((res)=>{
  		// console.log(res);
  		this.position = res.data.name;
  	})
  },
  updated () {
  	var height = $("#searchArea").offset().top;
	$(window).scroll(function(){
		// console.log( height )
		if($(window).scrollTop()>height){
		    $("#searchArea").css({
		        "position":"fixed",
		        "top":0,
		        "z-index":99
		    })
		    $("#searchArea").find("a").css("padding","0 0.925rem")
		}else{
		    $("#searchArea").css("position","static")
		    $("#searchArea").find("a").css("padding","0")
		}    
	})
  }
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#header{
		height: 0.96rem;
		width:100%;
		background: url(../../../static/images/headerbg.png) repeat-y left top;
		background-size:cover;
	}
	#top{
		display: flex;
		justify-content: flex-start;
		padding-left: 0.15rem;
		color:#fff;
		padding-top: 0.2rem;
		font-size: 0.5rem;
	}
	.place{
		width:1.7rem;
		text-overflow:ellipsis;
		overflow: hidden;
		white-space: nowrap;
		color:#fff;
		font-size: 0.18rem;
		font-weight: bold;
		padding-left: 0.025rem;
	}
	#searchArea{
		height: 0.31rem;
		padding: 0.1rem;
		background: url(../../../static/images/headerbg.png) repeat-y left top;
		background-size:cover;
	}
	#searchArea>a{
		display: flex;
		background: #fff;
		height:0.36rem;
		align-items: center;
		border-radius:2px;
		justify-content: center;
		color:#9e9e9e;
		font-size: 0.16rem;
	}
	#searchArea>a>i{
		margin-right: 0.1rem;
	}
	.dingwei{
		font-size: 0.2rem;
		line-height: 0.25rem;
	}
</style>
