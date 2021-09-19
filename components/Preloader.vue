<template>
	<div class="preloader">
		<img src="/img/preloader.gif" alt="loader">
		
	</div>
</template>

<script>
export default {

  name: 'Preloader',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
	.preloader{
		height: 50px;
		text-align: center;
		img{
			max-height: 100%;
		}
	}
</style>