<template>
  <ul class="types">
    <li :class="value === '-' && 'selected'" @click="selectedType('-')">
      <Icon name="spend"/>
      支出
    </li>
    <li :class="value === '+' && 'selected'" @click="selectedType('+')">
      <Icon name="income"/>
      收入
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  @Prop(String) readonly value!: string;
  selectedType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('不知名错误');
    }
    this.$emit('update:value',type)
  }

 }

</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.types {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;

  li {
    width: 50%;
    line-height: 50px;
    position: relative;
    background: $color-Light;
    display: flex;
    justify-content: center;
    align-items: center;

    > .icon {
      margin-right: 3px;
    }

    &.selected {
      color: $color-highLight;
    }
  }
}
</style>