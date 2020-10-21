<template>
	<Mys/>
</template>

<script>
	import Mys from '@/components/mys/mys.vue'
	export default {
		name:'My',
		components:{
			Mys
		},
	  data() {
	    return {
	      
	    }
	  },
	  onShow(){
		  this.$store.dispatch("admins");
		  this.$store.dispatch("loginStates");
	  },
	  methods: {
	   
	  }
	}

</script>

<style>

</style>
