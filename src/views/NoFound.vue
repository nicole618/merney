<template>
  <div class="noFound">
    <Icon name="404"/>
      <router-link to="/">返回首页</router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NoFound'
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper";
.noFound{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  color: $color-lowLight;
  .icon{
    width: 50%;
    height: auto;
    display: flex;
    align-items: center;
  }
}
</style>