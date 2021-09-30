<template>
  <!-- <Tutorial/> -->
  <div>
  	<Header :cartOpen.sync="cartOpen"
		:cart="cart"/>
	  <main class="page">
	  	<div class="page__header">
	  	<!-- <p>{{cart}}</p> -->
	  		<div class="page__title">Каталог</div>
	  		<ProductFilter :currentValue.sync="currentValue"
	  			@current-page-reset="setCurrentPageFromFilters"></ProductFilter>
	  		<!-- <p>{{products}}</p> -->
	  	</div>
		  <article class="catalog">
		  	<Navbar :activeIndex.sync="activeIndex"
		  		@current-page-reset="setCurrentPageFromFilters"></Navbar>

		  	<div class="catalog__content">
		  		<Preloader v-if="!products"></Preloader>
		  		<Card v-else v-for="product in paginatedProducts" 
		  			:key="product.id" 
		  			:product="product"
		  			@add-to-cart="addProduct"
		  			></Card>
		  	</div>
	  		<paginate 
	  			v-model="currentPage"
	  			:force-page="forcePage"
		      :pageCount="Math.ceil(filteredProducts.length/perPage) - 1"
		      :containerClass="'pagination'"
		      :page-class="'pagination__item'"
		      :prev-text="'Назад'"
				  :next-text="'Вперед'"
				  :click-handler="clickCallback"
				  :hide-prev-next="true"
		      >
		    </paginate>
		  	<p>{{currentPage}}</p>
		  	<p>filteredProducts: {{filteredProducts.length}}</p>
		  	<!-- <ul class="pagination">
		  		<li class="pagination__item"
		  			v-for="i in Math.ceil(filteredProducts.length/perPage)"
		  			:key="i"
		  			@click="currentPage = (i-1)"
		  			:class="{active: currentPage === i - 1}">
		  				{{i}}
		  			</li>
		  	</ul> -->
		  </article>
		  <Slider></Slider>
	  </main>
	<div class="cover" :class="{'active':cartOpen}"></div>
    <Cart :cartOpen.sync="cartOpen" 
    	:class="{'active':cartOpen}"
    	:cart="cart"
    	@remove-from-cart="removeProduct"
    	@clear-cart="removeAllProducts"></Cart>
  
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
			},
			cart: [],
			perPage: 12,
			currentPage: 0,
			// initialPage: null,
			forcePage: 1
		}
	},
	computed: {
		filteredProducts(){
			return this.products.filter(product => product.category === this.activeIndex)
				.sort((a,b) => a[this.filterKeys[this.currentValue]] < b[this.filterKeys[this.currentValue]] ? 1 : -1);
		},
		paginatedProducts(){
			return this.filteredProducts.slice(this.perPage * this.currentPage, (this.perPage * this.currentPage) +this.perPage);
		}
	},
	methods: {
		addProduct(product){
			if(this.cart.length === 0){
				this.cart.push(product);

			}else{
				if(!this.cart.some(el => el == product)){
					this.cart.push(product);
				}
			}

			this.updateLocalStorage();
		},
		removeProduct(id){
			this.cart.splice(this.cart.findIndex(prod => prod.id === id), 1);
			this.updateLocalStorage();
		},
		removeAllProducts(){
			this.cart = [];
		},
		updateLocalStorage(){
			localStorage.setItem('productCart', JSON.stringify(this.cart));
		},
		clickCallback: function(page) {
	      console.log(page);
	     	// page = this.currentPage = page;
	    },
	    setCurrentPageFromFilters(){
	    	this.currentPage = 0;
			this.forcePage = 1;
	    }
	},
	mounted(){
		console.log(JSON.parse(localStorage.getItem('productCart')));
		var cartInLocal = JSON.parse(localStorage.getItem('productCart'));
		if(cartInLocal){
			this.cart = cartInLocal;
		}

	}
}
</script>
<style lang="scss">
	.page{
			@include max-screen($sm){
			padding-top: 140px;
			// padding-bottom: 0;
		}
		@include max-screen($xss){
			padding-top: 200px;
		}
	}
.page__header {
	display: grid;
		padding-top: 66px + 32px;
	grid-template-columns: 1fr auto;
	padding-bottom: 24px;
	 position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 12;
  background-color: #fff;
	@include max-screen($sm){
		padding-top: 0;
		position: fixed;
		width: 100%;
		padding-bottom: 10px;
		padding-right: 30px;
		top: 66px;
		// padding-bottom: 0;
	}
	@include max-screen($xss){
		display: block;
	}  
	
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
	@include max-screen($sm){
		display: block;
			
	}
}

.catalog__content {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
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
.pagination {
	display: flex;
	margin-top: 36px;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	grid-column: 2/span 1;

	li{
		list-style-type: none;

	}
}
.pagination__item {
	width: 24px;
	height: 24px;
	padding: 15px;
	flex: 0 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	// margin: 0 8px;
	border-radius: 50%;
	font-size: 16px;
	list-style-type: none;

	&.active{
		background-color: #959DAD;
	}
}
</style>
