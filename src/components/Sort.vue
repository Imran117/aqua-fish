<template>
  <div class="sort container">
    <router-link class="sort__link" to="/product">ПРОДУКЦИЯ <span class="sort__arrow"></span></router-link>
   
    <ul class="sort__list">
      <li class="sort__list-li">
        <router-link to="/product/default-feed">СТАРТОВЫЙ КОРМ</router-link>
      </li>
      <li class="sort__list-li">
        <router-link to="/product/producers-feed">ПРОДУКЦИОННЫЕ КОРМА</router-link>
      </li>
      <li class="sort__list-li">
        <router-link to="/product/grocery-feed">КОРМ ДЛЯ ПРОИЗВОДИТЕЛЕЙ</router-link>
      </li>
      <li class="sort__list-li">
        <router-link to="/product/functional-feed">ФУНКЦИОНАЛЬНЫЕ КОРМА</router-link>
      </li>
      <li class="sort__list-li" >
        <router-link to="/product/organic-feed">ОРГАНИЧЕСКИЙ КОРМ</router-link>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sort-vue'
}
</script>

<style>

</style>