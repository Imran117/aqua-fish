<template>
  <HeaderVue /> 
  <router-view />
  <FooterVue />
</template>

<script>
import HeaderVue from "@/components/Header.vue";
import FooterVue from "@/components/Footer.vue";

export default {
  name: 'App',
  components: {
    HeaderVue,
    FooterVue,
}
}
</script>

<style>

</style>
