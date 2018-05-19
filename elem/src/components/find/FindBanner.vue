<template>
	<div id="find-Banner">
		<img :src="bannerImg">
	</div>
</template>

<script>
export default {
	name: 'FindBanner',
	data () {
		return {
			bannerImg : "https://fuss10.elemecdn.com/5/2f/94338b99657d5c2a3de1ba17cb660jpeg.jpeg"
		}
	}
}




</script>

<style scoped>
#find-Banner img{
	width: 100%;
}
#find-Banner{
	margin-top: 0.445rem;
}
</style>
