<template>
	<div id="find-Header">
		<div id="findhead">
			<span><</span>
			<b>发现</b>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FindHeader',
	data () {
		return {
			
		}
	}
}




</script>

<style scoped>
#find-Header{
	width:100%;	
	position: fixed;
	top:0;
	z-index:99;
}
#findhead{
	height:0.445rem;
	background: url(../../../static/images/headerbg.png) repeat left top;
	line-height: 0.445rem;
	padding-left:0.1rem;
	display: flex;
	justify-content:flex-start;
	color:#fff;
	background-size:cover;
}
#findhead span{
	font-size: 0.3rem;
}
#findhead b{
	margin-left: 1.4rem;
	font-size: 0.2rem;
}
</style>
