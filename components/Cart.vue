<template>
	<div class="cart" v-click-outside="cartHide">
		<div class="cart__header">
			<div class="cart__title">Корзина</div>
			<div class="cart__close" @click="cartHide">
				<img src="/img/close.svg" alt="">
			</div>
		</div>
		<div class="cart__messages" v-show="!isSubmited">
			<div class="cart__text" v-if="cart.length">Товары в корзине</div>
			<div class="cart__message" v-else>Пока что вы ничего не добавили
	в корзину.</div>
			
		</div>
		<div class="cart__submit cart-ok" v-if="isSubmited">
			<div class="cart-ok__img">
				<img src="/img/ok.jpg" alt="alt">
			</div>
			<div class="cart-ok__title">Заявка успешно отправлена</div>
			<div class="cart-ok__text">Вскоре наш менеджер свяжется с Вами</div>
		</div>
		<div class="cart__body" v-else>
			<ul class="cart__items" v-show="cart.length">
				<li class="cart__item item-cart" v-for="prod in cart" :key="prod.id">
					<div class="_prod-img cart__img">
						<img :src="'https://frontend-test.idaproject.com' + prod.photo" :alt="prod.name">
					</div>
					
					<div class="product-title">{{prod.name}}</div>
					<div class="product-price">{{prod.price}}</div>

					<div class="product-rating">
						<img src="/img/rate-start.svg" alt="star">
						<div class="product-rating-value">4.5</div>
					</div>

					<div class="product__remove" @click.stop="prodRemove(prod.id)">
						<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M0 5C0 4.44772 0.447715 4 1 4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H1C0.447715 6 0 5.55228 0 5Z"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H13V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2H8ZM15 4V3C15 2.20435 14.6839 1.44129 14.1213 0.87868C13.5587 0.31607 12.7956 0 12 0H8C7.20435 0 6.44129 0.31607 5.87868 0.87868C5.31607 1.44129 5 2.20435 5 3V4H3C2.44772 4 2 4.44772 2 5V19C2 19.7957 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H15C15.7957 22 16.5587 21.6839 17.1213 21.1213C17.6839 20.5587 18 19.7957 18 19V5C18 4.44772 17.5523 4 17 4H15ZM4 6V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H15C15.2652 20 15.5196 19.8946 15.7071 19.7071C15.8946 19.5196 16 19.2652 16 19V6H4Z" />
							<path fill-rule="evenodd" clip-rule="evenodd" d="M8 9C8.55229 9 9 9.44771 9 10V16C9 16.5523 8.55229 17 8 17C7.44772 17 7 16.5523 7 16V10C7 9.44771 7.44772 9 8 9Z"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M12 9C12.5523 9 13 9.44771 13 10V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V10C11 9.44771 11.4477 9 12 9Z"/>
						</svg>

					</div>
				</li>
			</ul>

			<form class="cart__form form-cart" @submit.prevent="formSubmit">
				<div class="cart-form__order" v-if="cart.length">
					<div class="form-cart__title">Оформить заказ</div>
					<label class="form-cart__label">
						<input type="text" name="name" class="form-cart__input" v-model="name" placeholder="Ваше имя"
							:class="{invalid: $v.name.$dirty && !$v.name.required}">
					</label>
					<label class="form-cart__label">
						<input type="text" name="phone" class="form-cart__input" 
							v-model="phone"
							v-mask="'+7 (###) ###-##-##'"
							placeholder="Телефон"
							:class="{invalid: $v.phone.$dirty && !$v.phone.required}"
							>
					</label>
					<label class="form-cart__label">
						<input type="text" name="loc" 
							class="form-cart__input" 
							v-model="loc"
							placeholder="Адрес"
							:class="{invalid: $v.loc.$dirty && !$v.loc.required}">
					</label>
					<button class="btn">Отправить</button>
					
				</div>
				<button class="btn" v-else @click="cartHide">Перейти к выбору</button>
			</form>
		</div>

	</div>
</template>

<script>
	import ClickOutside from 'vue-click-outside'
	import {required} from 'vuelidate/lib/validators' //импорт отдельных валидаторов

export default {

  name: 'Cart',
  props: ['cartOpen', 'cart'],
  data () {
    return {
    	isSubmited: false,
		name: '',
		phone: '',
		loc: ''
    }
  },
  validations:{
		name: {//поля соответсвуют названиям моделей, привязанных к полям формы
			required //названия экспортированных валидаторов
		},
		loc: {//поля соответсвуют названиям моделей, привязанных к полям формы
			required
		},
		phone: {
			required
		}
	},
  methods: {
  	cartHide(){
  		this.$emit('update:cartOpen', false);
  		this.isSubmited = false;
  		// this.$v.$reset();
  		this.$v.$reset(); //сброс валидации поля
  		// document.body.classList.remove('freeze');
  	},
  	prodRemove(id){
  		this.$emit('remove-from-cart', id);
  	},
  	formSubmit(){
  		if(this.$v.$invalid){
  			this.$v.$touch()
  			return
  		}
  		this.$emit('clear-cart', null);
  		this.isSubmited = true;
  		this.name = this.phone = this.loc = "";
  		this.$v.$reset(); //сброс валидации поля
  	}
  },
  directives: {
    ClickOutside
  }
}
</script>

<style lang="scss">
.cart {
	display: flex;
	flex-direction: column;
	padding: 52px 48px ;
	position: fixed;
	right: 0;
	top: 0;
	background-color: #fff;
	max-width: 460px;
	height: 100%;
	overflow: auto;
	transition: all 0.3s;
	transform: translate3D(100%, 0, 0);
	width: 100%;
	z-index: 51;
	box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
border-radius: 8px 0px 0px 8px;
	&.active{
		transform: translate3D(0, 0, 0);
	}
	@include max-screen($sm){
		padding: 22px 18px;
	}  
}
.cart__header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex: 0 0 auto;
	margin-bottom: 24px;
}
.cart__title {
	font-weight: bold;
font-size: 32px;
line-height: 41px;
}
.cart__close {
	cursor: pointer;
}
.cart__message {
	margin-bottom: 24px;
	font-size: 22px;
line-height: 28px;
}
.cart__text {
	margin-bottom: 16px;
	font-size: 18px;
	line-height: 23px;
	display: flex;
	align-items: flex-end;
	color: #59606D;
}
.cart__body {
	flex: 1 1 auto;
}
.cart__items {
	margin-bottom: 32px;
	max-height: 400px;
	overflow: auto;

}
.cart__item {
}
.item-cart {
	padding: 12px 22px 16px 25px;
	display: grid;
	grid-template-columns: 100px 1fr auto;
	// grid-template-rows: repeat(5, auto);
	grid-column-gap: 16px;
	// align-items: start;
	// justify-content: start;
	box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
border-radius: 8px;

	._prod-img {}
	.cart__img{
		grid-row: span 4;
		margin-bottom: 0;
	}
	.product-price {
		grid-column: 2/3;
		margin-bottom: 16px;
	}
	.product-rating {
		grid-column: 2/3;

	}

	@include max-screen($sm){
		padding-left: 16px;
		padding-right: 16px;
		grid-template-columns: 50px 1fr auto;
	}  
}
.product-title {}
.product-rating-value {}
.product__remove{
	grid-column: 3/4;
  grid-row: 1/4 ;
	// grid-column-start: 3;
	// grid-column-start: 4;
	align-self: center;
	cursor: pointer;
	svg{
		fill: #959DAD;
	}

	@media (any-hover: hover) {
		&:hover {
				svg{
				fill: #000;
			}
		}
	}
}
.cart__form {}
.form-cart {
	margin-bottom: 24px;
}
.form-cart__title {
	margin-bottom: 16px;
	font-size: 18px;
	line-height: 23px;
	color: #59606D;
}
.form-cart__label {
	display: block;
		margin-bottom: 18px;
	&:last-of-type{
		margin-bottom: 24px;
	}
}
.form-cart__input {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 14px;
	height: 50px;
	background: #F8F8F8;
	border-radius: 8px;
	font-size: 16px;
	line-height: 21px;
	color: #959DAD;
	border: none;

	&.invalid{
		outline: 2px solid red;
	}
}
.cart-ok{
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

.cart-ok__img {
	margin-bottom: 24px;
}
.cart-ok__title {
	margin-bottom: 3px;
	font-weight: bold;
font-size: 24px;
text-align: center;
}
.cart-ok__text {
	font-size: 16px;
	line-height: 21px;
	text-align: center;
	color: #59606D;
}
</style>