<template>
	<div class="card">
		<div class="card__header">
			<div class="product-rating">
				<!-- <img src="/img/rate-start.svg" alt="star"> -->
				<div class="product-rating__icon">
					<div class="product-rating__out"></div>
					<div class="product-rating__box"
						:style="{height: (product.rating/5) * 100 + '%'}">
						<div class="product-rating__in"></div>
						
					</div>
				</div>
				<div class="product-rating__value">{{product.rating}}</div>
			</div>
			<div class="card__to-cart" 
				v-if="!isInCart"
				@click.stop="addToCart(product)">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
					<path fill-rule="evenodd" clip-rule="evenodd" d="M3.92 1.74C4.03331 1.58892 4.21115 1.5 4.4 1.5H11.6C11.7889 1.5 11.9667 1.58892 12.08 1.74L13.88 4.14C13.9579 4.24386 14 4.37018 14 4.5V12.9C14 13.3774 13.8104 13.8352 13.4728 14.1728C13.1352 14.5104 12.6774 14.7 12.2 14.7H3.8C3.32261 14.7 2.86477 14.5104 2.52721 14.1728C2.18964 13.8352 2 13.3774 2 12.9V4.5C2 4.37018 2.04211 4.24386 2.12 4.14L3.92 1.74ZM4.7 2.7L3.2 4.7V12.9C3.2 13.0591 3.26321 13.2117 3.37574 13.3243C3.48826 13.4368 3.64087 13.5 3.8 13.5H12.2C12.3591 13.5 12.5117 13.4368 12.6243 13.3243C12.7368 13.2117 12.8 13.0591 12.8 12.9V4.7L11.3 2.7H4.7Z" />
					<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.5C2 4.16863 2.26863 3.9 2.6 3.9H13.4C13.7314 3.9 14 4.16863 14 4.5C14 4.83137 13.7314 5.1 13.4 5.1H2.6C2.26863 5.1 2 4.83137 2 4.5Z"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M5.6 6.3C5.93137 6.3 6.2 6.56863 6.2 6.9C6.2 7.37739 6.38964 7.83523 6.72721 8.17279C7.06477 8.51036 7.52261 8.7 8 8.7C8.47739 8.7 8.93523 8.51036 9.27279 8.17279C9.61036 7.83523 9.8 7.37739 9.8 6.9C9.8 6.56863 10.0686 6.3 10.4 6.3C10.7314 6.3 11 6.56863 11 6.9C11 7.69565 10.6839 8.45871 10.1213 9.02132C9.55871 9.58393 8.79565 9.9 8 9.9C7.20435 9.9 6.44129 9.58393 5.87868 9.02132C5.31607 8.45871 5 7.69565 5 6.9C5 6.56863 5.26863 6.3 5.6 6.3Z" />
				</svg>

			</div>

			<div v-else class="card__in-cart">
				<img :src="$config.baseURL +'/img/check.svg'" alt="">
			</div>
			<!-- <div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> -->
		</div>
		<nuxt-link :to="'/' + product.id" class="card__link">
			<div class="card__img _prod-img">
				<img :src="'https://frontend-test.idaproject.com' + product.photo" :alt="product.name">
			</div>
			<div class="product-title">{{product.name}}</div>
			<div class="product-price">{{product.price}}</div>
		</nuxt-link>
	</div>
</template>

<script>
export default {

  name: 'Card',
  props: ['product', 'isInCart'],

  data () {
    return {

    }
  },
  methods: {
  	addToCart(item){
  		this.$emit('add-to-cart', item);
  	}
  }
}
</script>

<style lang="scss">
.card {
	display: block;
	position: relative;
	padding: 18px;
	box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
border-radius: 8px;
text-decoration: none;
}
.card__header {
	padding: 18px;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 2;
}
.product-rating {
	display: flex;
	align-items: center;
}
.product-rating__value {
	margin-left: 5px;
	color: #F2C94C;
	font-size: 10px;
line-height: 13px;
}
.card__to-cart {
	cursor: pointer;

	svg{
		fill: #959DAD;
	}

	@media (any-hover: hover) {
		&:hover{
			svg{
				fill: #000;
			}			
		}
	}
}
.card__img {
	padding-bottom: 80%;
}
._prod-img {
	margin-bottom: 16px;
}
.product-title {
	margin-bottom: 6px;
	font-size: 14px;
line-height: 18px;
/* grey */

color: #59606D;
}
.product-price {
	font-weight: bold;
font-size: 14px;
line-height: 18px;
/* black */

color: #1F1F1F;
}
.product-rating__icon {
	position: relative;
	width: 30px;
	height: 30px;
}
.product-rating__out,
.product-rating__in,
.product-rating__box
 {
	@include absolute-center-old;
	width: 30px;
	height: 30px;
	bottom: 0;
	top: auto;
	background-repeat: no-repeat;
	background-position: center;
	background-size: 100%;
}
.product-rating__out{
	background-image: url(/bags-catalog/img/star-empty.svg);
}
.product-rating__in {
	background-image: url(/bags-catalog/img/star-full.svg);
}
.product-rating__box{
	// height: 40%;
	overflow: hidden;
}
.card__in-cart{
	img{
		width: 25px;
	}
}
.card__link{
	text-decoration: none;
}
</style>