<template>
  <div id="index">
  	<section>
  		<IndexHeader/>
  		<IndexBanner/>
  		<IndexIcon/>
  		<IndexSec/>
  		<IndexList/>
  	</section>
  	<footer>
		<Footer/>
  	</footer>
  </div>
</template>


<script>
import IndexHeader from './IndexHeader';
import IndexBanner from './IndexBanner';
import IndexIcon from './IndexIcon';
import IndexSec from './IndexSec';
import IndexList from './IndexList';
import Footer from '../Footer';

export default {
  name: 'Index',
  data () {
    return {

    }
  },
  components : {
  	IndexHeader,
  	IndexBanner,
  	IndexIcon,
  	IndexSec,
  	IndexList,
  	Footer
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#index{
		display: flex;
		height: 100%;
		width:100%;
		flex-direction: column;
	}
	section{
		flex:1;
		height:100%;
		overflow: hidden;
		overflow-y:auto;
	}
	footer{
		display: flex;
		height:0.4rem;
		background: #fff;
	}

</style>
