<template>
	<nav class="navbar">
		<!-- <p>{{categories}}</p> -->
		<Preloader v-if="categories.length === 0"></Preloader>
		<ul v-else class="navbar__list">
			<li class="navbar__item" v-for="item in navs"
				:key="item.id"
				:class="{'active':item.id === activeIndex}"
				@click.prevent="setActiveCat(item.id)">
				<a href="#" class="navbar__link">{{item.name}}</a>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {

		name: 'Navbar',
		props: ['activeIndex'],

		async fetch(){
			this.navs = await fetch('https://front-test.idalite.com/api/product-category').then(response => response.json());

		},

		data () {
			return {
				// navs: [
				//   { id: 1, name: 'Рюкзаки' },
				//   { id: 2, name: 'Сумки-мессенджеры' },
				//   { id: 3, name: 'Деловые сумки' }
				// ]
				navs: []

			}
		},
		computed: {
			categories(){
				return this.navs;
			}

		},
		methods: {
			setActiveCat(id){
				// this.activeIndex = id;
				this.$emit('update:activeIndex', id);
				this.$emit('current-page-reset');
			}
		}
	}
</script>

<style lang="scss">
	.navbar {
		// @include max-screen($sm){
		// 	grid-column: 1/span 2;
			
		// }
	}
	.navbar__list {
		top: 66px + 32px + 70px;
	  z-index: 10;
	  position: -webkit-sticky;
  	position: sticky;
		
		@include max-screen($sm){
			position: fixed;
			width: 100%;
			left: 15px;
			top: 115px;
			display: grid;
			grid-template-columns: repeat(3, auto);
			grid-gap: 16px;
			justify-content: start;
			background-color: #fff;
			z-index: 10;
		}
		@include max-screen($xss){
			top: 137px;
			padding-bottom: 10px;
			grid-template-columns: repeat(2, auto);
			grid-gap: 5px;
		}
		
	}
	.navbar__item {
		list-style-type: none;
		&:not(:last-child){
			margin-bottom: 16px;
			@include max-screen($xss){
				margin-bottom: 0;
			}
		}
		&.active{
			.navbar__link{
				color: #000;
				text-decoration: underline;

			}
		}
	}
	.navbar__link {
		font-size: 16px;
		line-height: 21px;
	/* grey-light */
		text-decoration: none;
		color: #959DAD;
		transition: color .3s;
		
		@media (any-hover: hover) {
			&:hover{
				color: #59606D;
			}
		}
	}
</style>