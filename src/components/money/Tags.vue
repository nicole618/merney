<template>
  <div class="tags hideScroll">
    <ol class="current">
      <li v-for="tag in dateSource" :key="tag.id" :class="value !==null && value.id === tag.id ? 'selected':''" @click="select(tag)">
        <div class="tagIcon">
          <Icon :name="tag.name"/>
        </div>
        <span>{{tag.textValue}}</span>
      </li>

      <li>
        <div class="tagIcon">
          <router-link to="/labels">
          <Icon name="add"/>
          </router-link>
        </div>
        <span><router-link to="/labels">编辑分类</router-link></span>
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
.tags {
  padding: 10px;
  background: white;
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
        a{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }
        .icon{
          width: auto;
          height: 60%;
        }
      }
      &.selected {
        color: $color-highLight;
        >.tagIcon{
          background: $color-highLight;
          color: white;
          .icon{
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

</style>