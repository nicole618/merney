<template>
<ol class="dayType">
  <li :class="value === '1'? 'selected' : ''" @click="selectedDayType('1')"><Icon name="day"/>按天</li>
  <li :class="value === '2'? 'selected' : ''" @click="selectedDayType('2')"><Icon name="month"/>按月</li>
  <li :class="value === '3'? 'selected' : ''" @click="selectedDayType('3')"><Icon name="year"/>按年</li>
</ol>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Prop} from 'vue-property-decorator';

@Component
export default class DayType extends Vue{
@Prop(String) value!: string;
  selectedDayType(type: string) {
    if (type !== '1' && type !== '2' && type !== '3') {
      throw new Error('不知名错误');
    }
    this.$emit('update:value',type)
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.dayType{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #fff;
  li{
    width: 33.33333%;
    padding: 10px 0;
    background: #eddcd1;
    .icon{
      margin-right: 5px;
    }
    &:nth-child(2){
      background: $color-lowLight;
    }
    &.selected{
      background: $color-highLight;
      color: #fff;
    }

  }
}
</style>