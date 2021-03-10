<template>
  <div>
    <label class="date textInput"><span><Icon name="date"/>日期：</span>
      <el-date-picker
          :value="value"
          type="date"
          class="myDate"
          format="yyyy-MM-dd"
          placeholder="请选择日期"
          @input="timeChange"
      >
      </el-date-picker>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class DateTime extends Vue {
  @Prop() readonly value!: Date | null;
  timeChange(value: Date){
    this.$emit('update:value',value)
  }
}
</script>

<style lang="scss">
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