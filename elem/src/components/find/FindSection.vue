<template>
	<div id="find-Section">
		<p></p>
		<div id="Sec-first">
			<b>金币商城</b>
			<span>0元好物在这里</span>
			<img src="../../../static/images/section_1.png">
		</div>
		<div class="Sec-other">
			<b>必吃爆料</b>
			<span>最夯外卖指南</span>
			<img src="../../../static/images/section_2.png">
		</div>
		<div class="Sec-other two">
			<b>推荐有奖</b>
			<span>5元现金拿不听</span>
			<img src="../../../static/images/section_3.png">
		</div>
		<div class="Sec-other three">
			<b>周边优惠</b>
			<span>领取口碑好券</span>
			<img src="../../../static/images/section_4.png">
		</div>
		<div class="Sec-other four">
			<b>百元红包</b>
			<span>兴业银行联名卡</span>
			<img src="../../../static/images/section_5.png">
		</div>
		<div class="news">
			<img src="https://fuss10.elemecdn.com/c/1b/cb917876ec34e51ac4a5e24a415a6jpeg.jpeg?imageMogr/format/png/">
		</div>
	</div>
</template>

<script>
export default {
	name: 'FindBanner',
	data () {
		return {
			
		}
	}
}




</script>

<style scoped>
p{
	width: 100%;
	height:0.03rem;
	background: #f5f5f5;
}
#Sec-first{
	width: 1.605rem;
	height: 1.4rem;
	padding:0 0.11rem 0.06rem 0.16rem;
	position: relative;
	float: left;
}
#Sec-first>img{
	width: 0.75rem;
	height: 0.75rem;
	position: absolute;
	right: 0;
	bottom:0;
}
#Sec-first>b{
	font-size: 0.16rem;
	color:#ff9900;
	font-weight: normal;
}
#Sec-first>span{
	font-size: 0.116rem;
	color:#999;
	display: block;
	line-height: 0.25rem;
}

.Sec-other{
	width: 1.575rem;
	height: 0.795rem;
	position: relative;
	float: left;
	padding:0 0.15rem;
}
.Sec-other>img{
	width: 0.45rem;
	height: 0.45rem;
	position: absolute;
	right: 0.1rem;
	top:0.1rem;
}
.Sec-other>b{
	font-size: 0.16rem;
	color:#f5785d;
	font-weight: normal;
}
.Sec-other>span{
	font-size: 0.116rem;
	color:#999;
	display: block;
	line-height: 0.25rem;
}
.two>b{
	color:#1ba9e1;
}
.three>b{
	color:#ed6660;
}
.four>b{
	color:#e88f28;
}
#news{
	width: 100%;
	height:0.975rem;
	background: #f5f5f5;
}
.news{
	clear: both;
	padding:0.05rem 0;
	background: #f5f5f5;
}
.news>img{
	width: 100%;

}
</style>
