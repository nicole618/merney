<template>
<div>
  <label class="date textInput"><span><Icon name="date"/>日期：</span>
    <el-date-picker
        v-model="value1"
        type="date"
        class="myDate">
    </el-date-picker>
  </label>
  <label class="notes textInput"><span><Icon name="remark"/>备注：</span><input type="text"></label>
</div>
</template>

<script lang="ts">
export default {
name: "notesDate",
  data() {
    return {
      value1: '',
    };
  }
}
</script>

<style lang="scss" >
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
  }
  .myDate{
    flex-grow: 1;
    width: auto !important;
    input.el-input__inner{
      background: none;
      border: none;
      padding: 0px;
      &:focus{
        outline: none;
      }
    }
    .el-input__prefix{
      display: none;
    }
  }
}
</style>