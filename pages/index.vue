<template>
  <!-- <Tutorial/> -->
  <div>
  	<Header :cartOpen.sync="cartOpen"/>
	  <main class="page">
	  	<div class="page__header">
	  		<div class="page__title">Каталог</div>
	  		<ProductFilter :currentValue.sync="currentValue"></ProductFilter>
	  		<!-- <p>{{products}}</p> -->
	  	</div>
		  <article class="catalog">
		  	<Navbar :activeIndex.sync="activeIndex"></Navbar>
		  	<div class="catalog__content">
		  		<Preloader v-if="!products"></Preloader>
		  		<Card v-for="product in filteredProducts" 
		  			:key="product.id" 
		  			:product="product"
		  			v-else></Card>
		  		<!-- <Card v-for="i in 200" :key="i"></Card> -->

		  		Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus assumenda ad laudantium quos maiores. Autem quis voluptatibus, molestiae quia ipsum officia ipsa iusto tempora veritatis voluptas est vitae sunt reprehenderit.
		  	</div>
		  </article>
	  </main>
		<div class="cover" :class="{'active':cartOpen}"></div>
    <Cart :cartOpen.sync="cartOpen" :class="{'active':cartOpen}"></Cart>
  
  </div>

  
</template>

<script>
export default {
	name: 'main-page',
	asyncData(){
		return fetch('https://front-test.idalite.com/api/product')
			.then(response => response.json())
			.then(data => ({products: data}));
	},
	data(){
		return {
			activeIndex: 1,
			cartOpen: false,
			currentValue: 'цене',
			filterKeys: {
				'цене': 'price',
				'популярности': 'rating'
			}
		}
	},
	computed: {
		filteredProducts(){
			return this.products.filter(product => product.category === this.activeIndex)
				.sort((a,b) => a[this.filterKeys[this.currentValue]] < b[this.filterKeys[this.currentValue]] ? 1 : -1);
		}
	}
}
</script>
<style lang="scss">
	.page{
	}
.page__header {
	display: grid;
		padding-top: 66px + 32px;
	grid-template-columns: 1fr auto;
	padding-bottom: 24px;
	 position: -webkit-sticky;
  position: sticky;
  top: 0;
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
	visibility: hidden;
	opacity: 0;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: #FFFFFF;
	z-index: 50;
	transition: all 0.3s;

	&.active{
		visibility: visible;
		opacity: 0.8;
	}
}
</style>
