<template>
	<div id="footer">
		<router-link active-class="activeColor" to='/' exact>
			<a href="javascript:"><i class="iconfont ifont first" v-html="iconfont['shouye']"></i><span>首页</span></a>
		</router-link>
		<router-link active-class="activeColor" to='/find'>
		<a href="javascript:"><i class="iconfont ifont" v-html="iconfont['find']"></i><span>发现</span></a>
		</router-link>
		<router-link active-class="activeColor" to='/order'>
			<a href="javascript:"><i class="iconfont ifont" v-html="iconfont['dingdan']"></i><span>订单</span></a>
		</router-link>
		<router-link active-class="activeColor" to='/login'>
			<a href="javascript:"><i class="iconfont ifont" v-html="iconfont['me']"></i><span>我的</span></a>
		</router-link>
	</div>
</template>

<script>

export default {
	name: 'Index',
	data () {
		return {
			iconfont : {
				shouye : "&#xe722;",
				find : "&#xe746;",
				dingdan : "&#xe652;",
				me : "&#xe622;"
			}
		}
	}
}


</script>

<style scoped>
#footer{
	position: fixed;
	bottom:0;
	left:0;
	right:0;
	display: flex;
	height:0.4rem;
	background: #fff;
	display: flex;
	box-shadow: 0 -2px 3px #ececec; 
	justify-content: space-around;
	align-items: center;
	padding-top: 0.05rem;
	padding-bottom: 0.05rem;
}

#footer a{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	color:#999;
	font-size: 0.1rem;
}

 a .ifont{
	color:#999;
	font-size:0.18rem;
	margin-bottom: 0.05rem;
	font-weight: bold;
}
.activeColor span{
	color:#0089dc;
	font-weight: 600;
}	
.activeColor .ifont{
	color:#0089dc;
}
#footer a .first{
	font-size: 0.34rem;
	margin-bottom:-0.03rem;
	margin-top: -0.09rem;
}
</style>
