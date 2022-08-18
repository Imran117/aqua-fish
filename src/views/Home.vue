<template>
  <section class="home">
    <div class="home__top">
      <div class="container home__sub">
        <h1 class="home__sub-title">ВЫСОКОКАЧЕСТВЕННЫЕ КОРМА ДЛЯ РЫБЫ</h1>
        <p class="home__sub-text">
          Корма Для Рыб Мы Производим Более 50 Лет И За Это Время Мы Накопили
          Огромный Опыт, Который Реализован В Производимой Продукции.
        </p>
      </div>
    </div>
    <div class="home__block">
      <h2 class="large-title title-line">НАШИ ПРЕИМУЩЕСТВА</h2>
      <div class="container home__block-section">
        <div class="home__block-item">
          <img class="home__block-icon" src="@/assets/images/call.svg" alt="">
          <h3 class="home__block-subName">Доступность</h3>
          <p class="home__block-subText">Отвечаем на все ваши вопросы</p>
        </div>
        <div class="home__block-item">
          <img class="home__block-icon" src="@/assets/images/maps.svg" alt="">
          <h3 class="home__block-subName">Удобная локация</h3>
          <p class="home__block-subText">Заботимся о наших клиентах</p>
        </div>
        <div class="home__block-item">
          <img class="home__block-icon" src="@/assets/images/like.svg" alt="">
          <h3 class="home__block-subName">Гарантия качество</h3>
          <p class="home__block-subText">Продукция проверенное годами</p>
        </div>
      </div>
    </div>
    <div class="home__block">
      <h2 class="large-title title-line">МЫ ПРЕДЛАГАЕМ</h2>
      <div class="container">
        <div class="row home__block-section">
        <div class="home__block-card col-xxl-3 col-xl-3 col-lg-5 col-md-7 col-11">
          <img class="home__block-image" src="@/assets/images/default-fish.jpg" alt="">
          <h3 class="home__block-subName">Стартовый корм</h3>
          <p class="home__block-cardText">
            Оптимальные корма и условия окружающей среды имеют первостепенное значение для успешного перехода малька от желточного мешка к самостоятельному питанию
          </p>
        </div>
        <div class="home__block-card col-xxl-3 col-xl-3 col-lg-5 col-md-7 col-11">
          <img class="home__block-image" src="@/assets/images/medium-fish.jpg" alt="">
          <h3 class="home__block-subName">Продукционные корма</h3>
          <p class="home__block-cardText">
          Аллер Аква предлагает широкий ассортимент продукционных кормов более чем для 30 видов рыб. Корм учитывает конкретные потребности питания каждого вида рыбы.
          </p>
        </div>
        <div class="home__block-card col-xxl-3 col-xl-3 col-lg-5 col-md-7 col-11">
          <img class="home__block-image" src="@/assets/images/premium-fish.jpg" alt="">
          <h3 class="home__block-subName">Корм для производителей</h3>
          <p class="home__block-cardText">
           Кормление производителей специализированным кормом имеет множество преимуществ.
          </p>
        </div>
        </div>
      </div>
    </div>
    <div class="home__info">
      <div class="container home__info-content">
        <img class="home__info-image" src="@/assets/images/production.jpg" alt="">

        <div class="home__info-item">
          <h3 class="home__info-title">Temperature Adapted Feeds</h3>
          <p>&nbsp;</p>
          <p class="home__info-text">Температурно-адаптированный корм</p>
          <p class="home__info-text">
            Корма, адаптированные к разным сезонным температурам, открывают новые возможности для роста и жизнедеятельности рыб. Возможность извлечения пользы при смене температуры стало основой рецептуры кормов.
          </p>
          <p class="home__info-text">
            Aller Aqua предлагает Корма Адаптированные к Температуре, концепцией которых является более высокое потребление корма и переваримость питательных веществ на протяжении всего года.
            <br>
            <br>
            Корма Адаптированные к Температуре для разных видов и сезонов разрабатываются в сотрудничестве Aller Aqua Research и международными исследовательскими институтами рыбного хозяйства.
          </p>
          <p>&nbsp;</p>
          <router-link class="link" to="/feed">Читать больше</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home-vue",
  data() {
    return {};
  },
};
</script>

<style>
</style>