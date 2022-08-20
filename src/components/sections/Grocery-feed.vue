<template>
  <section class="product">
    <div class="product__content">
      <img src="@/assets/images/grocery-feed.jpg" alt="" />
    </div>
    <SortVue />
    <div class="container product__preview">
      <h2 class="product__preview-title">Корм для производителей</h2>
      <p class="product__preview-text">
        Кормление производителей специализированным кормом имеет множество
        преимуществ.
      </p>

      <div class="product__grocery">
        <h4 class="product__grocery-title">
          Использование кормов для производителей позволяют получить следующих
          результаты:
        </h4>
        <ul>
          <li class="product__grocery-text">1. Плодовитость</li>
          <li class="product__grocery-text">2. Оплодотворение</li>
          <li class="product__grocery-text">3. Развитие эмбриона</li>
          <li class="product__grocery-text">4. Качество посадочного материала</li>
        </ul>
      </div>

      <div class="product__grocery">
        <h4 class="product__grocery-title">
          Наш ассортимент кормов для производителей:
        </h4>
        <p class="product__grocery-text">
          ALLER REP EX <br />
          ALLER STURGEON REP EX
        </p>
        <p class="product__grocery-text">КОРМ ДЛЯ ПРОИЗВОДИТЕЛЕЙ ALLER AQUA состоит из сбалансированного рациона питания, которое обеспечивает формирование качественного посадочного материала на всех этапах его созревания.</p>
      </div>

      <div class="product__grocery">
        <h4 class="product__grocery-title">
        Полиненасыщенные жирные кислоты
        </h4>
        <p class="product__grocery-text">
         - поддержка функционирования клеточных мембран рыбы <br>
         - улучшение симметрии яйца и жизнеспособность <br>
         - увеличение выводимости <br>
         - улучшение роста производительности и выживаемости малька
        </p>
      </div>

      <div class="product__grocery">
        <h4 class="product__grocery-title">Каротиноид</h4>
        <p class="product__grocery-text">
          - антиоксидантные свойства защищают мембраны от свободных радикалов
        </p>
      </div>

      <div class="product__grocery">
        <h4 class="product__grocery-title">Крилевая мука</h4>
        <p class="product__grocery-text">
          - богата полиненасыщенными жирными кислотами, витаминами и каротиноидами
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Grocery-feed",
};
</script>

<style>
</style>