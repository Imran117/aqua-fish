<template>
  <section class="product">
    <div class="product__content">
      <img src="@/assets/images/organic-feed.jpg" alt="" />
    </div>
    <SortVue />
    <div class="container product__preview">
      <p class="product__preview-text">КАЧЕСТВО И УСТОЙЧИВОЕ РАЗВИТИЕ</p>
      <h2 class="product__preview-title">
        Органические корма для рыбы от Aller Aqua
      </h2>
      <p class="product__preview-text">
        Компания Aller Aqua предлагает органические корма полного
        производственного цикла для различных видов рыб. Регламент ЕС требует,
        чтобы вся рыба, выращиваемая на органических хозяйствах, питалась
        органическими кормами на всех этапах её жизни - от первого до последнего
        кормления.
      </p>
    <div class="product__preview-organicblock">
      <img
        class="product__preview-organicImage"
        src="@/assets/images/organic-info1.jpg"
        alt=""
      />
      <div class="product__preview-wrapper">
        <h3 class="product__title">Утвержденное органическое сырье</h3>
        <p class="product__preview-text">
          Aller Aqua - является ведущим мировым производителем органических
          кормов для рыбы. Все корма производятся на фабрике в Дании из
          высококачественного сертифицированного органического сырья.
        </p>
        <br />
        <p class="product__preview-text">
          Наше производство проинспектировано и сертифицировано датскими
          властями на соответствие нормам ЕС по производству органических кормов
          для рыбы.
        </p>
        <p class="product__preview-text">
          Для получения сертификата EU Organic, производители рыбы должны
          соблюдать строгие ограничения в отношении плотности посадки, качества
          воды, минимизации стресса рыбы и ряда других факторов.
        </p>
        <p class="product__preview-text">
          Более подробная информация доступна на веб-сайте Европейской комиссии: 
        </p>
      </div>
    </div>
    <div class="product__preview-organicblock organicblock2">
      <div class="product__preview-wrapper">
        <h3 class="product__title">Утвержденное органическое сырье</h3>
        <p class="product__preview-text">
          Aller Aqua - является ведущим мировым производителем органических
          кормов для рыбы. Все корма производятся на фабрике в Дании из
          высококачественного сертифицированного органического сырья.
        </p>
        <br />
        <p class="product__preview-text">
          Наше производство проинспектировано и сертифицировано датскими
          властями на соответствие нормам ЕС по производству органических кормов
          для рыбы.
        </p>
        <p class="product__preview-text">
          Для получения сертификата EU Organic, производители рыбы должны
          соблюдать строгие ограничения в отношении плотности посадки, качества
          воды, минимизации стресса рыбы и ряда других факторов.
        </p>
        <p class="product__preview-text">
          Более подробная информация доступна на веб-сайте Европейской комиссии: 
        </p>
      </div>
        <img
        class="product__preview-organicImage"
        src="@/assets/images/organic-info2.jpg"
        alt=""
      />
    </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Organic-feed.vue",
};
</script>

<style>
</style>