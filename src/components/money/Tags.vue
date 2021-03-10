<template>
  <div class="tags">

    <ol class="current">
      <li v-for="tag in dateSource" :key="tag.id" :class="value !==null && value.id === tag.id ? 'selected':''" @click="select(tag)">
        <div class="tagIcon">
          <Icon :name="tag.name"/>
        </div>
        <span>{{tag.value}}</span>
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
import  Vue from 'vue';
import {Component,Prop} from 'vue-property-decorator';

@Component
export default class Tags extends Vue{
  @Prop() dateSource: string[] | undefined;
  @Prop() readonly value!: Tag;
  select(tag: Tag){
      if(this.value && this.value.id !== tag.id){
       this.$emit('update:value',tag)
      } else{
        this.$emit('update:value',null)
      }

    this.$emit('update:value',tag)
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/animation.scss";
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
      &.selected {
        color: $color-highLight;
        >.tagIcon{
          background: $color-highLight;
          color: white;
          >.icon{
            -webkit-animation: icon-bounce 0.5s alternate;
            -moz-animation: icon-bounce 0.5s alternate;
            -o-animation: icon-bounce 0.5s alternate;
            animation: icon-bounce  0.5s alternate;
          }
        }

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
@mixin  keyframes ($bounce) {
  @keyframes #{$bounce} {
    0%, 100% {
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    25% {
      -moz-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      -webkit-transform: rotate(15deg);
      transform: rotate(15deg);
    }

    50% {
      -moz-transform: rotate(-15deg);
      -ms-transform: rotate(-15deg);
      -webkit-transform: rotate(-15deg);
      transform: rotate(-15deg);
    }

    75% {
      -moz-transform: rotate(5deg);
      -ms-transform: rotate(5deg);
      -webkit-transform: rotate(5deg);
      transform: rotate(5deg);
    }

    85% {
      -moz-transform: rotate(-5deg);
      -ms-transform: rotate(-5deg);
      -webkit-transform: rotate(-5deg);
      transform: rotate(-5deg);
    }
  }
}
</style>