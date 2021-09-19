<template>
	<nav class="navbar">
		<ul class="navbar__list">
			<li class="navbar__item" v-for="item in navs"
				:key="item.id"
				:class="{'active':item.id === activeIndex}"
				@click="setActiveCat(item.id)">
				<a href="#" class="navbar__link">{{item.title}}</a>
			</li>
			<!-- <li class="navbar__item">
				<a href="#" class="navbar__link">Рюкзаки</a>
			</li>
			<li class="navbar__item">
				<a href="#" class="navbar__link">Рюкзаки</a>
			</li> -->
			
		</ul>
	</nav>
</template>

<script>
	export default {

		name: 'Navbar',

		data () {
			return {
				activeIndex: 1,
				navs: [
				{
					id: 1,
					title: 'Рюкзаки'
				},
				{
					id: 2,
					title: 'Футболки'
				},
				{
					id: 3,
					title: 'Рубашки'
				}
				]
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
	.navbar__list {}
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