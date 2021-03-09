<template>
  <div>
    <Layout>
      <ul class="types">
        <li class="selected"><Icon name="spend"/>支出</li>
        <li><Icon name="income"/>收入</li>
      </ul>
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
      <label class="notes textInput"><span><Icon name="remark"/>备注：</span><input type="text"></label>
      <label class="date textInput"><span><Icon name="date"/>日期：</span>

      </label>
      <div class="numberPad">
        <div class="output">100</div>
        <div class="buttons">
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
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">

export default {
  name: 'Money.vue',
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
}
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

