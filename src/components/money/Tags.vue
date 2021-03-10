<template>
  <div class="tags">

    <ol class="current">
      <li>
        <div class="tagIcon">
          <Icon name="clothing"/>
        </div>
        <span class="oneLine">衣</span>
      </li>
      <li>
        <div class="tagIcon">
          <Icon name="food"/>
        </div>
        <span class="oneLine">食</span>
      </li>
      <li>
        <div class="tagIcon">
          <Icon name="live"/>
        </div>
        <span class="oneLine">住</span>
      </li>
      <li>
        <div class="tagIcon">
          <Icon name="travel"/>
        </div>
        <span class="oneLine">行</span>
      </li>
      <li>
        <div class="tagIcon">
          <Icon name="add"/>
        </div>
        <span>新增分类</span>
      </li>

    </ol>
  </div>
</template>

<script lang="ts">
export default {
name: "Tags.vue"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tags {
  padding: 10px;
  background: white;
  flex-grow: 1;
  > .current {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    > li {
      width: 22%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin:1% 1.5%;
      >.tagIcon{
        background: $color-Light;
        $h: 40px;
        height: $h;
        width: 100%;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        margin-bottom: 2px;
        >.icon{
          width: auto;
          height: 60%;
        }
      }
      &.select {
        background: $color-highLight;
      }
    }
  }

  > .new {
    padding-top: 16px;

    > button {
      border: none;
      background: transparent;
      border-bottom: 1px solid $border-color;
      padding: 0 4px;
    }
  }
}
</style>