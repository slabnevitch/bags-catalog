<template>
	<div class="product-filter">
		<div class="product-filter__action" 
			v-click-outside="filterHide"
			@click="filterVisibility = !filterVisibility">
				<div class="product-filter__key">Сортировать по:</div>
				<div class="product-filter__value">{{currentValue}}</div>
				<div class="product-filter__arrow">
					<svg width="5" height="3" viewBox="0 0 5 3" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M5 0H0L2.5 2.5L5 0Z" fill="#59606D"/>
					</svg>
				</div>
			
		</div>
		<ul class="product-filter__dropdown" :class="{'visible': filterVisibility}">
			<li class="product-filter__item" v-for="value in allValues"
				:key="value"
				@click="changeValue(value)"
				:class="{'active': value === currentValue}">По {{value}}</li>

		</ul>
	</div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
export default {

  name: 'ProductFilter',

  data () {
    return {
    	filterVisibility: false,
    	currentValue: 'цене',
    	allValues: ['цене', 'популярности']
    }
  },
  methods: {
  	changeValue(value){
  		this.currentValue = value;
  		this.filterVisibility = false;
  	},
  	filterHide(){
  		this.filterVisibility = false;
  	}
  },
  mounted(){
  	// var vm = this;
  	// document.addEventListener('click', function(e) {
  	// 	// console.log(this);
  	// 	console.log(e.target);
  	// 	if(!e.target.classList.contains('product-filter__action') || !e.target.closest('.product-filter__action')){
  	// 			vm.filterVisibility = false	

  	// 	}
  	// });
  },
  directives: {
    ClickOutside
  }
}
</script>

<style lang="scss">
	.product-filter {
	position: relative;
	display: flex;
	align-items: flex-end;
	font-size: 16px;
	line-height: 21px;
	cursor: pointer;
	z-index: 5;
}
.product-filter__action{
	display: flex;
	// align-items: flex-end;
}
.product-filter__key {
	margin-right: 5px;
}
.product-filter__value {
	color: #59606D;
}
.product-filter__arrow {
	// align-self: center;
	margin-left: 8px;
	height: 5px;
}
.product-filter__dropdown {
	padding: 12px 0;
	position: absolute;
	opacity: 0;
	visibility: hidden;
	transition: all .3s ease-out;
	max-width: 160px;
	min-width: 160px;
	right: 0;
	top: 100%;
	background: #FFFFFF;
	box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
	border-radius: 8px;

	&.visible{
		opacity: 1;
		visibility: visible;
	}
}
.product-filter__item {
	padding: 4px 12px 4px 12px;
	list-style-type: none;
	font-size: 14px;
	line-height: 18px;
	color: #959DAD;

	&:not(:last-child){
		margin-bottom: 8px;
	}

	&:hover,
	&.active{
		color: #000;
		background-color: #F8F8F8;
	}
}
</style>