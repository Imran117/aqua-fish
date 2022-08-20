import { createApp } from 'vue';
import { BootstrapVue } from 'bootstrap';
import App from './App.vue';
import routers from '@/router/index';
document.title = 'allerFish';
import '@/assets/scss/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import SortPage from '@/components/Sort'
const app = createApp(App);
app.component('SortVue', SortPage)
app.use(BootstrapVue);
app.use(routers);
app.mount('#app');

const nav = document.querySelector('.header__nav');
window.addEventListener('scroll', function() {
  if(window.scrollY >= 500) nav.style.top = `-100%`
  else nav.style.top = 0

  if(window.scrollY >= 100) nav.style.background = `#ffffffba`
  else nav.style.background = `white`
})

class asd  {
  constructor() {
    this.switch = !this.switch

    console.log(this.switch);
  }
}

new asd()