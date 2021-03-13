<template>
<div class="noFoundData">
  <Icon name="noData"/>
  <p>暂无数据哟~</p>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class NoData extends Vue{

}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.noFoundData{
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  color: $color-lowLight;
  margin-top: 40px;
  .icon{
    width: 50%;
    height: auto;
    margin: 0 auto;
  }
  &.hide{
    display: none;
  }
}
</style>