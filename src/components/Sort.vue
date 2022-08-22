<template>
  <div class="sort container">
    <router-link class="sort__link" to="/product">ПРОДУКЦИЯ<span class="sort__arrow" @click.prevent="addClass('activeCatalog')"></span></router-link>
   
    <ul class="sort__list" :class='{active:activeCatalog}'>
      <li class="sort__list-li">
        <p class="sort__list-default" @click="addClass('activeCatalog')">Категорий</p>
      </li>
      <li class="sort__list-li">
        <router-link class="sort__list-link" to="/product/default-feed">СТАРТОВЫЙ КОРМ</router-link>
      </li>
      <li class="sort__list-li">
        <router-link class="sort__list-link" to="/product/producers-feed">ПРОДУКЦИОННЫЕ КОРМА</router-link>
      </li>
      <li class="sort__list-li">
        <router-link class="sort__list-link" to="/product/grocery-feed">КОРМ ДЛЯ ПРОИЗВОДИТЕЛЕЙ</router-link>
      </li>
      <li class="sort__list-li">
        <router-link class="sort__list-link" to="/product/functional-feed">ФУНКЦИОНАЛЬНЫЕ КОРМА</router-link>
      </li>
      <li class="sort__list-li" >
        <router-link class="sort__list-link" to="/product/organic-feed">ОРГАНИЧЕСКИЙ КОРМ</router-link>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sort-vue',
  data() {
    return {
      activeCatalog: false
    }
  },

  methods: {
     addClass(result) {
      this[result] = this[result] == false ? true : false
    }
  }
}
</script>

<style>

</style>