<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="card in cards">
        <card :product="card"></card>
        <!-- <h1>{{banner}}</h1> -->
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>

<script>
  export default {
    props: ['cards'],
    data () {
      return {
        banners: [ 'Skotnik', 'Bredov', 'Babunov' ],
        swiperOption: {
          autoplay: 5000,
          initialSlide: 1,
          loop: true,
          slidesPerView: 5,
          pagination: '.swiper-pagination',
          onSlideChangeEnd: swiper => {
            console.log('onSlideChangeEnd', swiper.realIndex)
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
    }
  }
</script>

<style lang="css" scoped>
</style>