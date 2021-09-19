<template>
  <!-- <Tutorial/> -->
  <div>
  	<Header :cartOpen.sync="cartOpen"/>
	  <main class="page">
	  	<div class="page__header">
	  		<div class="page__title">Каталог</div>
	  		<ProductFilter></ProductFilter>
	  		<!-- <p>{{products}}</p> -->
	  	</div>
		  <article class="catalog">
		  	<Navbar></Navbar>
		  	<div class="catalog__content">
		  		<!-- <Preloader v-if="!products"></Preloader> -->
		  		<!-- <Card v-for="product in products" 
		  			:key="product.id" 
		  			:product="product"
		  			v-else></Card> -->
		  		<Card v-for="i in 200" :key="i"></Card>

		  		Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus assumenda ad laudantium quos maiores. Autem quis voluptatibus, molestiae quia ipsum officia ipsa iusto tempora veritatis voluptas est vitae sunt reprehenderit.
		  	</div>
		  </article>
	  </main>
		<div v-show="cartOpen" class="cover"></div>
    <Cart v-if="cartOpen" :cartOpen.sync="cartOpen"></Cart>
  	
  </div>

  
</template>

<script>
export default {
	name: 'main-page',
	// asyncData(){
	// 	return fetch('https://front-test.idalite.com/api/product')
	// 		.then(response => response.json())
	// 		.then(data => ({products: data}));
	// },
	data(){
		return {
			cartOpen: false
			// products: []
		}
	}
}
</script>
<style lang="scss">
	.page{
		padding-top: 66px + 32px;
	}
.page__header {
	display: grid;
	grid-template-columns: 1fr auto;
	margin-bottom: 24px;
	 position: -webkit-sticky;
  position: sticky;
  top: -1px;
  z-index: 10;
  background-color: #fff;
}
.page__title {
	font-weight: bold;
	font-size: 32px;
	line-height: 41px;
	color: #1F1F1F;
}

.catalog {
	display: grid;
	grid-template-columns: 161px 1fr;
	// column-gap: 16px;
}
.catalog__content {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
	grid-gap: 16px;
}
.cover{
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: #FFFFFF;
opacity: 0.8;
z-index: 50;
}
</style>
