<template>
  <div>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="card in cards">
          <card :product="card"
            @add-to-cart="addProduct"
            :isInCart="cart.find(item => item.id === card.id) != undefined"></card>
          <!-- <h1>{{banner}}</h1> -->
        </div>
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    
  </div>
</template>

<script>
  export default {
    props: ['cards', 'cart'],
    data () {
      return {
        banners: [ 'Skotnik', 'Bredov', 'Babunov' ],
        swiperOption: {
          autoplay: 5000,
          initialSlide: 1,
          loop: true,
          slidesPerView: 5,
          spaceBetween: 18,
          watchOverflow: false,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          breakpoints: {
            375: {
              slidesPerView: 1.2,
              spaceBetween: 15
            },
            576: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
              }
          },
          // pagination: '.swiper-pagination',
          onSlideChangeEnd: swiper => {
            // console.log('onSlideChangeEnd', swiper.realIndex)
          }
        }
      }
    },
    mounted() {
      // console.log('app init')
      // setTimeout(() => {
      //   this.banners.push('/5.jpg')
      //   console.log('banners update')
      // }, 3000)
      // console.log(
      //   'This is current swiper instance object', this.mySwiper, 
      //   'It will slideTo banners 3')
      // this.mySwiper.slideTo(3)
    },
    methods: {
      addProduct(item){
        this.$emit('add-to-cart', item);
      }
    }
  }
</script>

<style lang="scss">
.swiper-container{
  margin-left: -12px;
  margin-right: -12px;
  padding: 12px;
}
.swiper-button-prev{
  left: 0px;
  @include max-screen(375px){
    display: none;
    
  }  
}
.swiper-button-next{
  right: 0px;
  @include max-screen(375px){
    display: none;
    
  }  
}
</style>