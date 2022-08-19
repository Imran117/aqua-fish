<template>
  <HeaderVue />
  <router-view :asd="SortVue"/>
  <FooterVue />
  <LogoVue />
</template>

<script>
import HeaderVue from "@/components/Header.vue";
import FooterVue from "@/components/Footer.vue";
import LogoVue from "@/components/Logo.vue";
export default {
  name: "App",
  components: {
    HeaderVue,
    FooterVue,
    LogoVue,
  },
};
</script>

<style>
</style>
