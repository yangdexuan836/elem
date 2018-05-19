<template>
	<div id="find-Xshl">
		<div id="xs-header">
			<img src="../../../static/images/zj-left.png">
			<img src="../../../static/images/zuji.png">
			<b>限时好礼</b>
			<img src="../../../static/images/zj-right.png">
			<p>金币换豪礼</p>
		</div>
		<div id="xs-section">
			<div class="liwu">
				<a href="javascript:">
					<img src="https://fuss10.elemecdn.com/7/c5/f595b52bc6b50c9899398dccffd42jpeg.jpeg?imageMogr/format/webp/">
				</a>
				<p>7元饿了么红包</p>
				<span>210金币<b>￥7</b></span>
				<div class="youhui">限时优惠</div>
			</div>
			<div class="liwu">
				<a href="javascript:">
					<img src="https://fuss10.elemecdn.com/5/78/5c1ca7ceca079926933ca418c9eb7jpeg.jpeg?imageMogr/format/webp/">
				</a>
				<p>扫地机器人</p>
				<span>9金币<b>￥99</b></span>
				<div class="youhui">特价换购</div>
			</div>
			<div class="liwu">
				<a href="javascript:">
					<img src="https://fuss10.elemecdn.com/5/17/bbc669132d02deae9300c45097a19jpeg.jpeg?imageMogr/format/webp/">
				</a>
				<p>机械手感键鼠套装</p>
				<span>9金币<b>￥129</b></span>
				<div class="youhui">特价换购</div>
			</div>
		</div>
		<div id="more">
			<a href="javascript:">查看更多 ></a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FindXshl',
	data () {
		return {
			
		}
	}
}




</script>

<style scoped>
#find-Xshl{
	padding-bottom: 0.8rem;
}
#xs-header{
	padding:0.2rem;
	background: #fff;
	text-align: center;
}
#xs-header img{
	display: inline-block;
	vertical-align: middle;
}
#xs-header b{
	font-size: 0.2rem;
}
#xs-header p{
	font-size: 0.06rem;
	color:#999;
}
#xs-section{
	width: 100%;
	display: flex;
	justify-content: flex-start;
	flex-wrap: nowrap;
	padding-left:0.2rem;
}
.liwu{
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
}
.liwu img{
	width: 1.11rem;
	height:1.1rem;
}
.liwu p{
	font-size: 0.12rem;
}
.liwu span{
	color:#ff5339;
	font-size: 0.12rem;
	line-height: 0.4rem;
}
.liwu span b{
	font-weight: normal;
	color:#aaaaaa;
	text-decoration: line-through;
	font-size: 0.1rem;
}
.liwu .youhui{
	position: absolute;
	top:0;
	left:0;
	font-size: 0.1rem;
	color:#fff;
	background: #000;
	padding:0.02rem;
}
#more{
	text-align: center;
	padding-top: 0.1rem;
	padding-bottom: 0.1rem;
}
#more a{
	font-size: 0.15rem;
	color:#999;
}
</style>
