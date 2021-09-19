<template>
	<nav class="navbar">
		<Preloader v-if="navs.length === 0"></Preloader>
		<ul class="navbar__list" v-else>
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

		fetch(){
			console.log('asyncDAta!')
			// fetch('https://front-test.idalite.com/api/product-category')
			// 	.then(response => response.json())
			// 	.then(data => console.log(data));

				fetch('https://front-test.idalite.com/api/product-category')
				.then(response => response.json())
				.then(data => {
					// setTimeout(() => {
					// 	this.navs = data
					// }, 3000)
					this.navs = data;
				});
		},

		data () {
			return {
				activeIndex: 1,
				navs: [
				  { id: 1, name: 'Рюкзаки' },
				  { id: 2, name: 'Сумки-мессенджеры' },
				  { id: 3, name: 'Деловые сумки' }
				]

			}
		},
		computed: {
			categories(){
				return this.navs;
			}

		},
		methods: {
			setActiveCat(id){
				this.activeIndex = id;
			}
		}
	}
</script>

<style lang="scss">
	.navbar {
	}
	.navbar__list {
		top: -1px;
	  z-index: 10;
	  position: -webkit-sticky;
  position: sticky;
		
	}
	.navbar__item {
		list-style-type: none;
		&:not(:last-child){
			margin-bottom: 16px;
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