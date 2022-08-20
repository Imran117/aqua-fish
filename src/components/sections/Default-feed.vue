<template>
  <section class="product">
    <div class="product__content">
      <img src="@/assets/images/default-bg.jpg" alt="" />
    </div>
    <SortVue />
    <div class="container product__preview">
      <h2 class="product__preview-title">Стартовый корм (Hatchery Pack)</h2>
      <p class="product__preview-text">
        Оптимальные корма и условия окружающей среды имеют первостепенное
        значение для успешного перехода малька от желточного мешка к
        самостоятельному питанию. Быстрый рост, низкая смертность, отсутствие
        деформаций - это результаты оптимального подобранного рациона кормления,
        отвечающего всем пищевым требованиям развивающейся молоди.
      </p>
      <p class="product__preview-text">
        Улучшенные стартовые корма от Aller Aqua получили дополнительный заряд
        необходимых питательных веществ, которые улучшают здоровье и развитие
        малька приводящие к:
      </p>
      <div class="product__tab tab1">
        <p class="product__tab-text">
          <img src="@/assets/images/product-like.jpg" alt="" />
          БЫСТРОМУ РОСТУ
        </p>
        <p class="product__tab-text">
          <img src="@/assets/images/product-like.jpg" alt="" />
          НИЗКОЙ СМЕРТНОСТИ И РАВНОМЕРНОМУ РОСТУ
        </p>
        <p class="product__tab-text">
          <img src="@/assets/images/product-like.jpg" alt="" />
          ОПТИМАЛЬНОМУ КАЧЕСТВУ ВОДЫ
        </p>
      </div>
      <p class="product__preview-tabtext">
        АLLER AQUA СТАРТОВЫЙ КОРМ (HATCHERY PACK) состоит из следующих
        продуктов:
      </p>
      <div class="product__tab">
      <div class="product__tab-item">
          <h3 class="product__tab-subtitle">КРУПКА</h3>
          <p class="product__tab-subtext">
            - ALLER INFA EX GR <br>
            - ALLER FUTURA EX GR <br>
            - ALLER ORGANIC EX GR  <br>
            - ALLER THALASSA EX GR  <br>
            - ALLER PARVO EX GR <br>
          </p>
      </div>
      <div class="product__tab-item">
          <h3 class="product__tab-subtitle">ГРАНУЛА</h3>
          <p class="product__tab-subtext">
            - ALLER FUTURA EX<br>
            - ALLER PERFORMA / EX<br>
            - ALLER THALASSA EX<br>
          </p>
      </div>
      </div>
      <div class="product__preview-block">
        <img src="@/assets/images/product-info1.jpg" alt="">
        <img src="@/assets/images/product-info2.jpg" alt="">
      </div>
      <div class="product__tab">
        <div class="product__tab-sub">
          <h4 class="product__tab-title">ALLER INFA EX GR</h4>
          <p class="product__tab-subtext">
              - Высокое содержание крилевой муки <br>
              - Узкий диапазон размеров гранул
          </p>
        </div>
        <div class="product__tab-sub">
          <h4 class="product__tab-title">ALLER FUTURA / EX / EX GR</h4>
          <p class="product__tab-subtext">
              - Увеличеное содержание жира и энергии <br>
              - Быстрый рост, низкий кормовой коэффициент <br>
              - Хорошая усваеваемость питательных веществ
          </p>
        </div>
        <div class="product__tab-sub">
          <h4 class="product__tab-title">ALLER THALASSA EX / GR</h4>
          <p class="product__tab-subtext">
              - Сбалансированное соотношение белка и жира
          </p>
        </div>
        <div class="product__tab-sub">
          <h4 class="product__tab-title">ALLER PERFORMA / EX</h4>
          <p class="product__tab-subtext">
              - Среднее содержание жира и энергии <br>
              - Высокая рентабельность 
          </p>
        </div>
        <div class="product__tab-sub">
          <h4 class="product__tab-title">ALLER PARVO EX GR</h4>
          <p class="product__tab-subtext">
              - Среднее содержание жира и энергии <br>
              - Высокая рентабельность
          </p>
        </div>
        <div class="product__tab-sub">
          <h4 class="product__tab-title">ALLER ORGANIC EX GR</h4>
          <p class="product__tab-subtext">
              - Среднее содержание жира и энергии <br>
              - Сертифицированные ингредиенты из ЭКО-ферм
          </p>
        </div>
      </div>
      <div class="product__preview-block">
        <p class="product__preview-text">
          Корма ALLER INFA EX GR, ALLER FUTURA EX GR и ALLER THALASSA EX GR богаты натуральными веществами, которые поддерживают развитие системы пищеварения и вспомогательных органов, облегчают переваривание корма и усваивание питательных веществ. Нуклеотиды, глюканы и компоненты со свойствами, которые балансируют бактериальную микрофлору, обеспечивают здоровье и правильное развитие быстро растущего малька.
        </p>
        <img class="product__preview-image" src="@/assets/images/product-info3.jpg" alt="">
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "Default-feed.vue",
};
</script>

<style>
</style>