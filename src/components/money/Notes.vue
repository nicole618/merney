<template>
<div>
  <label class="notes textInput"><span><Icon name="remark"/>{{noteName}}</span>
    <input type="text" :value="value"
           @change="onValueChanged($event)" :placeholder="placeholder" :maxlength="maxlength"></label>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class NotesDate extends Vue{
  @Prop(String) readonly value!: string;
  @Prop(String) readonly placeholder!: string;
  @Prop(String) readonly noteName!: string;
  @Prop(String) readonly maxlength!: string;
  onValueChanged($event: Event){
    if($event.target !== null){
      this.$emit('update:value', ($event.target as HTMLInputElement).value)
    }
}
}


</script>

<style lang="scss" scoped >
@import "~@/assets/style/helper.scss";
.textInput {
  background: $color-Light;
  display: flex;
  padding:0 16px;
  border-bottom: 1px solid $border-color;
  align-items: center;
  >span{
    display: flex;
    align-items: center;
    .icon{
      width: 1.5em;
      height: 1.5em;
      position: relative;
      bottom: 1.5px;
    }
  }
  >input {
    height: 48px;
    border: none;
    flex-grow: 1;
    background: transparent;
    &::placeholder {
      color: #999;
    }
    &::-webkit-input-placeholder {
      color: #999;
    }
    &:-moz-placeholder {
      color: #999;
    }
    &:-ms-input-placeholder {
      color: #999;
    }
  }
  .myDate{
    flex-grow: 1;
    width: auto !important;
    input.el-input__inner{
      background: none;
      border: none;
      padding: 0;
      &:focus{
        outline: none;
      }
      &::placeholder {
        color: #999;
      }
      &::-webkit-input-placeholder {
        color: #999;
      }
      &:-moz-placeholder {
        color: #999;
      }
      &:-ms-input-placeholder {
        color: #999;
      }
    }
    .el-input__prefix{
      display: none;
    }
  }
}
</style>