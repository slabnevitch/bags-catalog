<template>
	<div class="container">
		<h2>Abput agr</h2>
		<div class="skot active"></div>
		<div class="skot"></div>
		
	</div>
</template>

<script>
export default {

  name: 'about',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/_misc/_vars.scss";
	.skot{
		width: 100px;
		height: 100px;
		background-color: orange;

		&.active{
			background-color: $accent;
		}
	}
	

</style>