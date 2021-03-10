<template>
  <div class="numberPad">
    <div class="output"><span>100</span></div>
    <div class="buttons clearfix">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="ok">OK</button>
      <button class="zero">0</button>
      <button class="dot">.</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
name: "NumberPad"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad{
  >.output{
    padding: 0 16px;
    padding: 10px 0;
    display: flex;
    justify-content: flex-end;
    font-size: 26px;
  }
  >.buttons{
    button{
      width: 25%;
      font-size: 16px;
      border: none;
      float: left;
      background: none;
      height: 35px;
      background:$color-Light;
      display: flex;
      justify-content: center;
      align-items: center;
      &:nth-child(1){
        background: #f3eeeb;
      }
      &:nth-child(2),&:nth-child(5){
        background: #f3e9e3;
      }
      &:nth-child(3),&:nth-child(6),&:nth-child(9){
        background: #f1e2d9;
      }
      &:nth-child(4),&:nth-child(7),&:nth-child(10),&:nth-child(13){
        background: #e8d9d0;
      }
      &:nth-child(8),&:nth-child(11){
        background: #e4d1c6;
      }
      &:nth-child(12),&:nth-child(14){
        background: #e4ccbe;
      }
      &.ok{
        height: 70px;
        float: right;
      }
      &.dot{
        width: 50%;
      }
    }
  }
}

</style>