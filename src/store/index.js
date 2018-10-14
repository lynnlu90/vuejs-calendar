import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// add moment
import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

export default new Vuex.Store({
  state: {
    currentYear: 2018,
    currentMonth: 10,
    eventFormPosX: 0,
    eventFormPosY: 0,
    eventFormActive: false,
    events: [
      {description:'random event 1',date:moment('2018-10-13','YYYY-MM-DD')},
      {description:'random event 2',date:moment('2018-09-12','YYYY-MM-DD')},
      {description:'random event 3',date:moment('2018-10-16','YYYY-MM-DD')}
    ],
    eventFormDate:moment()
  },
  mutations: {
    setCurrentMonth(state,payload) {
      state.currentMonth = payload;
    },
    setCurrentYear(state,payload) {
      state.currentYear = payload;
    },
    eventFormPos(state,payload) {
      state.eventFormPosX = payload.x;
      state.eventFormPosY = payload.y;
    },
    eventFormActive(state,payload) {
      state.eventFormActive = payload;
    },
    addEvent(state,payload) {
      state.events.push({
        description:payload,
        date:state.eventFormDate
      });
    },
    eventFormDate(state,payload) {
      state.eventFormDate = payload;
    }
  }
});
