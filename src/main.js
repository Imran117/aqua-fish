import { createApp } from 'vue';
import { BootstrapVue } from 'bootstrap';
import App from './App.vue';
import routers from '@/router/index';
document.title = 'allerFish';
import '@/assets/scss/main.scss';
import 'bootstrap/dist/css/bootstrap.css';

const app = createApp(App);
app.use(BootstrapVue);
app.use(routers);
app.mount('#app');

const btnMenu = document.querySelector('.header__navbar-toggle'),
  btnMenuList = document.querySelector('.header__navbar-categories');

btnMenu.addEventListener('click', function () {
  this.classList.toggle('active');

  if (this.classList.contains('active')) {
    btnMenuList.classList.add('active');
  } else {
    btnMenuList.classList.remove('active');
  }
});
