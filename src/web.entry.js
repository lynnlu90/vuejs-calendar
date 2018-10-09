import Vue from 'vue';
import './style.scss';

// add moment
import moment from 'moment-timezone';
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype,'$moment',{get() {return this.$root.moment}});

// components
import App from './components/App.vue';

// initiate vue
new Vue({
  el: '#app',
  data: {
    moment
  },
  components: {
    App
  }
});
