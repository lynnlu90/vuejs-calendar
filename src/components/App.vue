<template id="">
  <div class="">
    <div class="" id='header'>
      <div class="">
        <h1>Vue.js Calendar</h1>
      </div>
      <div class="">
        <current-month></current-month>
      </div>
    </div>
    <div class="" id='day-bar'>
      <div class="">Mon</div>
      <div class="">Tue</div>
      <div class="">Wed</div>
      <div class="">Thu</div>
      <div class="">Fri</div>
      <div class="">Sat</div>
      <div class="">Sun</div>
    </div>
    <div class="" id='calendar'>
      <div class="calendar-week" v-for='week in weeks'>
        <calendar-day class="" v-for='day in week' :day='day'></calendar-day>
      </div>
    </div>
  </div>

</template>

<script type="text/javascript">
  import CalendarDay from './CalendarDay.vue';
  import CurrentMonth from './CurrentMonth.vue';
  export default {
    computed: {
      month() {
        return this.$store.state.currentMonth;
      },
      year() {
        return this.$store.state.currentYear;
      },
      days() {

        // generating all days in current month
        let days = [];
        let currentDay = this.$moment(`${this.year}-${this.month}-1`,'YYYY-M-D');
        do {
          days.push(currentDay);
          currentDay = this.$moment(currentDay).add(1,'days');
        } while ((currentDay.month() + 1) === this.month);

        // add previous days to start
        currentDay = this.$moment(days[0]);
        const SUNDAY = 0;
        const MONDAY = 1;
        if (currentDay.day() !== MONDAY) {
          do {
            currentDay = this.$moment(currentDay).subtract(1,'days');
            days.unshift(currentDay);
          } while (currentDay.day() !== MONDAY);
        }

        // add following days to end
        currentDay = this.$moment(days[days.length-1]);
        if (currentDay.day() !== SUNDAY) {
          do {
            currentDay = this.$moment(currentDay).add(1,'days');
            days.push(currentDay);
          } while (currentDay.day() !== SUNDAY);
        }

        return days;
      },
      weeks() {
        let weeks = [];
        let week = [];
        for (let day of this.days) {
          week.push(day);
          if (week.length === 7) {
            weeks.push(week);
            week = [];
          }
        }
        return weeks;
      }
    },
    components: {
      CalendarDay,
      CurrentMonth
    }
  }
</script>
