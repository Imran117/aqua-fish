<template>
  <header class="header">
    <nav class="header__nav">
      <div class="header__navbar container">
        <router-link to="/" class="header__navbar-logo">
          <img src="@/assets/images/logo.png" alt=""/>
        </router-link>
        <button class="header__navbar-burger" @click="addClass('openBurger')" :class="{active:openBurger}">
          <span></span>
        </button>
        <div class="header__navbar-menu" :class="{active:openBurger}">
          <ul class="header__navbar-list" >
            <li v-for="(link, index) in links" :key="index">
              <router-link class="header__navbar-link" :to="link.url">
              {{link.name}}
              </router-link>
            </li>
          </ul>
          <div class="header__navbar-button">
            <button @click="addClass('openLang')" :class="[{active:openLang}, 'header__navbar-toggle' ]" >RU</button>
            <ul class="header__navbar-categories" :class="{active:openLang}">
              <li class="header__navbar-lang">
                <img src="@/assets/images/uz.png" alt="" />
                UZ
              </li>
              <li class="header__navbar-lang">
                <img src="@/assets/images/ru.png" alt="" />
                RU
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { routerName } from "@/router/index";
import { links } from "@/_config";
export default {
  name: "Header-vue",
  data() {
    return {
      openBurger: false,
      openLang: false,
      links: links,
      activeClass: routerName,
    };
  },
  created() {},
  watch: {},
  computed: {},
  methods: {
    addClass(result) {
      this[result] = this[result] == false ? true : false
    }
  },
};
</script>

<style>
</style>