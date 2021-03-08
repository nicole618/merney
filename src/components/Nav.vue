<template>
  <nav>
    <router-link to="/labels">
      <Icon name="label"/>标签
    </router-link>
    <router-link to="/money">
      <Icon name="money"/>记一笔
    </router-link>
    <router-link to="/statistics">
      <Icon name="statistics"/>统计
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Nav"
}
</script>

<style lang="scss" scoped>
  nav{
    display: flex;
    box-shadow: 0 0 5px rgba(0,0,0,.25);
    >a{
      width: 33.333%;
      display: flex;
      justify-content: space-between;
      text-align: center;
      flex-direction: column;
      align-items: center;
      .icon{
        width: 25px;
        height: 25px;
      }
    }
  }

</style>