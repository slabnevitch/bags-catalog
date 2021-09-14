<template>
  <!-- <Tutorial/> -->
  <main class="page">
  	<div class="page__header">
  		<div class="page__title">Каталог</div>
  		<ProductFilter></ProductFilter>
  		
  	</div>
	  <article class="catalog">
	  	<Navbar></Navbar>
	  	<div class="catalog__content">
	  		Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus assumenda ad laudantium quos maiores. Autem quis voluptatibus, molestiae quia ipsum officia ipsa iusto tempora veritatis voluptas est vitae sunt reprehenderit.
	  	</div>
	  </article>
	 </div>
  	
  </main>

  
</template>

<script>
export default {
	name: 'main-page'
}
</script>
<style lang="scss">
	.page{
		padding-top: 66px + 32px;
	}
.page__header {
	display: grid;
	grid-template-columns: 1fr auto;
	margin-bottom: 24px;
}
.page__title {
	font-weight: bold;
	font-size: 32px;
	line-height: 41px;
	color: #1F1F1F;
}

.catalog {
	display: grid;
	grid-template-columns: 144px 1fr;
	column-gap: 16px;
}
.catalog__content {
	display: grid;
}
</style>
