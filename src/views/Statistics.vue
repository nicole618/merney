<template>
  <div>
    <Layout>
      <Types :value.sync="query.type"/>
      <DayType :value.sync="query.dayType"/>
      <DateTime :value.sync="query.dateTime" :date-time-type="query.dateTimeType"
                :date-time-format="query.dateTimeFormat"/>
      <div class="showEcharts" :class="echartsData.length !== 0 ? 'show': 'hide'">
        <Echarts :options="x"/>
      </div>
      <NoData :class="echartsData.length === 0 ? 'show': 'hide'"/>
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
import Echarts from 'vue-echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import NoData from '@/views/NoData.vue';

type Echarts = {
  name: string;
  value: number;
}

@Component({
             components: {NoData, DayType, DateTime, Types, Echarts},
           })
export default class Statistics extends Vue {
  query = {type: '-', dateTime: '', dayType: '1', dateTimeType: 'date', dateTimeFormat: 'yyyy-MM-dd'};
  recordList: RecordItem[] = store.fetchRecord();
  recordResult: RecordItem[] | undefined = [];
  echartsData: Echarts[] = [];
  noData: string = 'hide';
  created() {
    this.recordResult = this.groupedList();
  }


  @Watch('query.type')
  onChangeType() {
    this.query.dateTime = '';
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
    this.query.dateTime = '';
  }

  @Watch('query.dateTime')
  onDateTimeChange() {
    this.groupedList();
  }

  groupedList() {
    this.echartsData = [];
    const recordByType = this.recordList.filter(record => record.type === this.query.type);
    if (recordByType.length === 0) {return []; }
    let nowTime = this.query.dateTime;
    if (this.query.dateTime === '') {
      nowTime = new Date().toISOString();
    }
    const hashmap: any = {};
    for (let i = 0; i < recordByType.length; i++) {
      if (this.query.dayType === '1') {
        const recordTime = dayjs(recordByType[i].dateTime).format('YYYY-MM-DD');
        const oldTime = dayjs(nowTime).format('YYYY-MM-DD');
        if (recordTime === oldTime) {
          const oldType: string | undefined = recordByType[i]?.tags?.textValue;
          if (oldType === undefined) return;
          if (oldType in hashmap) {
            hashmap[oldType] += recordByType[i].amount;
          } else {
            hashmap[oldType] = recordByType[i].amount;
          }
        }

      } else if (this.query.dayType === '2') {
        const recordTime = dayjs(recordByType[i].dateTime).format('YYYY-MM');
        const oldTime = dayjs(nowTime).format('YYYY-MM');
        if (recordTime === oldTime) {
          const oldType: string | undefined = recordByType[i]?.tags?.textValue;
          if (oldType === undefined) return;
          if (oldType in hashmap) {
            hashmap[oldType] += recordByType[i].amount;
          } else {
            hashmap[oldType] = recordByType[i].amount;
          }
        }
      } else if (this.query.dayType === '3') {
        const recordTime = dayjs(recordByType[i].dateTime).format('YYYY');
        const oldTime = dayjs(nowTime).format('YYYY');
        if (recordTime === oldTime) {
          const oldType: string | undefined = recordByType[i]?.tags?.textValue;
          if (oldType === undefined) return;
          if (oldType in hashmap) {
            hashmap[oldType] += recordByType[i].amount;
          } else {
            hashmap[oldType] = recordByType[i].amount;
          }
        }
      }
    }
    for (let key in hashmap) {
      const obj = {name: '', value: 0};
      obj.name = key;
      obj.value = hashmap[key];
      this.echartsData.push(obj);
    }
  }

  get x() {

    return {
      title: {
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '50%',
          data: this.echartsData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ],
      color: ['#eddcd1', '#d99061', '#fb5f03', '#f3eeeb', '#b49683', '#c6a932', '#d9e394', '#67c23a', '#946950', '#a7c4e2',],
    };
  }
}

</script>

<style lang="scss" scoped>
.showEcharts {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-content: center;
  &.hide{
    display: none;
  }
  .echarts {
    width: 100%;
  }
}

</style>