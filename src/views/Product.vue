<template>
  <section class="product">
    <div class="product__content">
      <img src="@/assets/images/product-bg.jpg" alt="" />
    </div>
    <SortVue/>
    <div class="container product__preview">
      <h2 class="product__preview-title">Корм и кормовые концепции</h2>
      <p class="product__preview-text">
        Оптимальный рост лежит в основе каждого типа корма, который мы
        разрабатываем в Aller Aqua. Оптимальный рост также лежит в основе нашей
        деятельности, предлагая широкий ассортимент кормов, которые не только
        предназначены для конкретных видов рыб, но также адаптированы к
        окружающей среде и температуре.
      </p>
      <p class="product__preview-text">
        В нашем ассортименте продуктов вы можете найти точный корм, который обеспечит оптимальный рост вашего хозяйства. Ассортимент продукции Aller Aqua является одним из самых универсальных в мире.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Product-vue",
};
</script>

<style>
</style>