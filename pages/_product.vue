<template>
	<!-- <h1>product {{id}}</h1> -->
</template>

<script>
export default {

  name: 'Product',
  asyncData({params}){
		// return fetch('https://jsonplaceholder.typicode.com/users/' + params.id)
		//   .then(response => response.json())
		//   .then(json => ({user: json}))
  		console.log(params.product)
  		// return {id: params}
	},

  data () {
    return {

    }
  },
  created(){
  	// console.log(this.$route.params)
  }
}
</script>

<style lang="css" scoped>
</style>