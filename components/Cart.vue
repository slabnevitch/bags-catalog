<template>
	<div class="cart">
		<div class="cart__header">
			<div class="cart__title">Корзина</div>
			<div class="cart__close">
				<img src="/img/close.svg" alt="">
			</div>
		</div>
		<div class="cart__message">Пока что вы ничего не добавили
в корзину.</div>
		<div class="cart__text">Товары в корзине</div>
		<div class="cart__body">
			<ul class="cart__items">
				<li class="cart__item item-cart">
					<div class="_prod-img">
						<img src="/img/product.jpg" alt="">
					</div>
					
					<div class="product-title">Рюкзак Louis Vuitton Discovery</div>
					<div class="product-price">150 000 ₽</div>

					<div class="product-rating">
						<img src="/img/rate-start.svg" alt="star">
						<div class="product-rating-value">4.5</div>
					</div>
				</li>
			</ul>
		</div>

		<div class="cart__form form-cart">
			<div class="form-cart__title">Оформить заказ</div>
			<label class="form-cart__label">
				<input type="text" class="form-cart__input" placeholder="Ваше имя">
			</label>
			<label class="form-cart__label">
				<input type="tel" class="form-cart__input" placeholder="Телефон">
			</label>
			<label class="form-cart__label">
				<input type="text" class="form-cart__input" placeholder="Адрес">
			</label>
			<button class="btn">Отправить</button>
		</div>
	</div>
</template>

<script>
export default {

  name: 'Cart',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
</style>