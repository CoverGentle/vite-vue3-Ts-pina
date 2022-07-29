<template>
  <van-calendar title="日历" :poppable="false" :show-confirm="false" :formatter="formatter" :style="{ height: '500px' }">
    <template #top-info="item">
      <span v-if="item.bottomInfo == '请假'" class="mark-green">请假</span>
      <span v-if="item.bottomInfo == '迟到'" class="mark-orange">迟到</span>
      <span v-if="item.bottomInfo == '旷课'" class="mark-orange">旷课</span>
      <span v-if="item.bottomInfo == '早退'" class="mark-orange">早退</span>
      <span v-if="item.bottomInfo == '冠军'" class="mark-yellow">冠军</span>

    </template>

  </van-calendar>
</template>

<script  lang='ts'>
export default ({
  setup() {
    type T = { date: { getMonth: () => number; getDate: () => any; }; topInfo: string; text: string; type: string; bottomInfo: string; }
    const formatter = (day: T) => {
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();
      console.log(date);
      let arr = [
        {
          dataMouth: '12',
          dateDay: '1',
          proOrloss: 1232,
        }, {
          dataMouth: '12',
          dateDay: '2',
          proOrloss: -1232,
        }, {
          dataMouth: '12',
          dateDay: '3',
          proOrloss: 2323,
        }, {
          dataMouth: '12',
          dateDay: '4',
          proOrloss: 3432,
        }, {
          dataMouth: '12',
          dateDay: '5',
          proOrloss: 2312,
        }, {
          dataMouth: '12',
          dateDay: '5',
          proOrloss: -1232,
        }
      ]

      // if (month === 7) {
      if (date === 27) {
        day.bottomInfo = '劳动节';
      } else if (date === 4) {
        day.bottomInfo = '青年节';
      } else if (date === 27) {
        day.text = '今天';
      }
      // }

      if (day.type === 'start') {
        day.bottomInfo = '入住';
      } else if (day.type === 'end') {
        day.bottomInfo = '离店';
      }

      return day;
    };

    return {
      formatter,
    };
  }
})
</script>

<style scoped>
.mark-green {
  color: #04B871;
}

.mark-orange {
  color: #F9793F;
}

.mark-yellow {
  color: #DAA000;
}
</style>