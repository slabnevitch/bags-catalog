<template>
  <div class="product">
    <div class="product__view">
      <!-- <p>{{product}}</p> -->
      
      <div class="card__img _prod-img">
        <img :src="'https://frontend-test.idaproject.com' + product.photo" :alt="product.name">
      </div>  
      
    </div>
    <div class="product__info">
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

    </div>
      <div class="product-title">{{product.name}}</div>
      <div class="product-price">{{product.price}}</div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Product',
  asyncData({params}){
		// return fetch('https://jsonplaceholder.typicode.com/users/' + params.id)
		//   .then(response => response.json())
		//   .then(json => ({user: json}))
  		// console.log('params ' + params);
    //   console.log('asyncData!');

  		// return fetch('https://front-test.idalite.com/api/product')
    //   .then(response => response.json())
    //   .then(data => ({
    //     item: data.filter(prod => prod.id.toString() === params.product)[0]
    //   }))
	},

  data () {
    return {
      posts: [],
      items: [],
      product: {},
      mountains: []
    }
  },
  async fetch() {
    const fetched = await fetch('https://front-test.idalite.com/api/product')
      .then(response => response.json());
    this.product = fetched.filter(item => item.id.toString() === this.$route.params.product)[0];
  },

  computed:{
  //   product(){
  //     return this.items.filter(item => item.id.toString() === this.$route.params.product)[0];
  //   }
  },
  watch: {
    item(value){
      console.log('item update!')
    }
  },
  created(){
      console.log(this.$route.params.product)

  }
}
</script>

<style lang="scss">
.product {
  width: 100%;
  display: grid;
  grid-template-columns: minmax(290px, 500px) 1fr;
  grid-column-gap: 18px;
}
.product__view {
}
.product__img {}
.product__info {
  .card__header{
    position: static;
  }

}
</style>