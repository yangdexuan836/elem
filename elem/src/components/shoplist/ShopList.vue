<template>
  <div class="List" scrolling="no">
  	<ListTop/>
    <ListBottom/>	
  </div>
</template>
<script>
import ListTop from './ListTop'
import ListBottom from './ListBottom'
export default {
  name: 'List',
  components:{
  	ListTop,
  	ListBottom
  }
  
}
</script>
<style scoped>
	body{
		display: flex;
		width:100%;
		height: 100%;
		flex-direction: column;
		overflow:hidden;
	
	}

</style>