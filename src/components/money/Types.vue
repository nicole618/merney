<template>
  <ul class="types">
    <li class="selected"><Icon name="spend"/>支出</li>
    <li><Icon name="income"/>收入</li>
  </ul>
</template>

<script lang="ts">
export default {
name: "Types"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.types{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  li{
    width: 50%;
    line-height: 50px;
    position: relative;
    background: $color-Light;
    display: flex;
    justify-content: center;
    align-items: center;
    >.icon{
      margin-right: 3px;
    }
    &.selected{
      color: $color-highLight;
    }
  }
}
</style>