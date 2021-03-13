<template>
  <div>
    <Layout>
      <Types :value.sync="query.type"/>
      <DayType :value.sync="query.dayType"/>
      <DateTime :value.sync="query.dateTime" :date-time-type="query.dateTimeType"
                :date-time-format="query.dateTimeFormat"/>
      <Echarts :options="polar"/>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import Types from '@/components/Types.vue';
import DateTime from '@/components/money/DateTime.vue';
import DayType from '@/components/statistics/DayType.vue';
import store from '@/store/index2';
import dayjs from 'dayjs/esm';
import Echarts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'

@Component({
             components: {DayType, DateTime, Types,Echarts},
           })
export default class Statistics extends Vue {
  query = {type: '-', dateTime: null, dayType: '1', dateTimeType: 'date', dateTimeFormat: 'yyyy-MM-dd'};
  recordList: RecordItem[] = store.fetchRecord();
  recordResult: RecordItem[] = [];

  created() {
    this.recordResult = this.groupedList();
  }

  @Watch('query.type')
  onChangeType() {
    this.groupedList();
  }

  @Watch('query.dayType')
  onChangeDateTime() {
    if (this.query.dayType === '1') {
      this.query.dateTimeType = 'date';
      this.query.dateTimeFormat = 'yyyy-MM-dd';
      this.groupedList();
    } else if (this.query.dayType === '2') {
      this.query.dateTimeType = 'month';
      this.query.dateTimeFormat = 'yyyy-MM';
      this.groupedList();
    } else if (this.query.dayType === '3') {
      this.query.dateTimeType = 'year';
      this.query.dateTimeFormat = 'yyyy';
      this.groupedList();
    }
    this.query.dateTime = null;
  }

  groupedList() {
    const recordByType = this.recordList.filter(record => record.type === this.query.type);
    if (recordByType.length === 0) {return []; }
    const nowTime = new Date().toISOString();
    const recordGroup: RecordItem[] = [];
    for (let i = 0; i < recordByType.length; i++) {
      if (this.query.dayType === '1') {
        const recordTime = dayjs(recordByType[i].dateTime).format('YYYY-MM-DD');
        const oldTime = dayjs(nowTime).format('YYYY-MM-DD');
        if (recordTime === oldTime) {
          recordGroup.push(recordByType[i]);
        }
      } else if (this.query.dayType === '2') {
        const recordTime = dayjs(recordByType[i].dateTime).format('YYYY-MM');
        const oldTime = dayjs(nowTime).format('YYYY-MM');
        if (recordTime === oldTime) {
          recordGroup.push(recordByType[i]);
        }
      } else if (this.query.dayType === '3') {
        const recordTime = dayjs(recordByType[i].dateTime).format('YYYY');
        const oldTime = dayjs(nowTime).format('YYYY');
        if (recordTime === oldTime) {
          recordGroup.push(recordByType[i]);
        }
      }
    }
    return this.recordResult = recordGroup;
  }
  get x() {
    const data = [];
    data()
    {
      const data: any[] = [];

      for (let i = 0; i <= 360; i++) {
        const t = i / 180 * Math.PI
        const r = Math.sin(2 * t) * Math.cos(2 * t)
        data.push([r, i])
      }
    }
    return {
        title: {
          text: '极坐标双数值轴'
        },
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      }
  }
  }

</script>

<style lang="scss" scoped>
#showEcharts {
  width: 100%;
  height: 200px;
}
</style>