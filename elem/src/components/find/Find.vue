<template>
	<div id="find">
		<FindHeader/>
		<section>
			<FindBanner/>
			<FindSection/>
			<FindXshl/>
		</section>
			<FindFooter/>
	</div>
</template>

<script>
import FindHeader from '../find/FindHeader.vue'
import FindBanner from '../find/FindBanner.vue'
import FindSection from '../find/FindSection.vue'
import FindXshl from '../find/FindXshl.vue'
import FindFooter from '../Footer'
export default {
	name: 'Find',
	data () {
		return {
			
		}
	},
	components: {
      FindFooter,
      FindHeader,
      FindBanner,
      FindSection,
      FindXshl
    }
}




</script>

<style scoped>
	#find{
		display: flex;
		flex-direction: column;
	}
	section{
		overflow-y:auto;
		flex:1;
	}
</style>
