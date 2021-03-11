<template>
  <div>
    <Layout>
      <Types :value.sync="type"/>
      <ol class="tagList hideScroll">
        <li v-for="tag in tagsType" :key="tag.id">
          <div class="tagLeft">
            <Icon :name="tag.name"/>
            <span>{{tag.value}}</span>
          </div>
          <div class="tagRight">
            <router-link to="/labels/edit/:tag.id"><el-button type="primary" icon="el-icon-edit" circle></el-button></router-link>
            <el-popconfirm title="确认删除此标签吗？" @onConfirm="deleteTag()"
            ><el-button type="danger" icon="el-icon-delete" circle slot="reference"></el-button>
            </el-popconfirm>
          </div>
        </li>
      </ol>
      <div class="addTag">
        <router-link to="/labels/add">新增{{typeName}}标签</router-link>
      </div>

    </Layout>
  </div>
</template>

<script lang="ts">

import Types from '@/components/normal/Types.vue';
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';

@Component({
             components: {Types},
           })
export default class Labels extends Vue {
  type: string = '-';
  tags: Tag[] = [
    {
      id: 1,
      name: 'clothing',
      value: '衣',
      type: '-'
    },
    {
      id: 2,
      name: 'food',
      value: '食',
      type: '-'
    },
    {
      id: 3,
      name: 'live',
      value: '住',
      type: '-'
    },
    {
      id: 4,
      name: 'travel',
      value: '行',
      type: '-'
    },
    {
      id: 5,
      name: 'wages',
      value: '工资',
      type: '+'
    },
    {
      id: 6,
      name: 'stock',
      value: '股票',
      type: '+'
    },
    {
      id: 7,
      name: 'fiscal',
      value: '理财',
      type: '+'
    },
    {
      id: 8,
      name: 'lottery',
      value: '彩票',
      type: '+'
    }
  ];
  tagsType = this.tags.filter(tag => tag.type === this.type);
  visible: boolean = false;
  typeName = '支出';

  @Watch('type')
  onRecordTypeChange(value: string){
    this.tagsType = this.tags.filter(tag => tag.type === value);
    value === '-'?this.typeName ='支出' : this.typeName = '收入';
  }

  deleteTag(){
    return;
  }
}
</script>

<style lang="scss" >
@import "~@/assets/style/helper.scss";
.tagList{
  flex-grow: 1;
  padding: 16px 0;
  font-size: 14px;
    >li{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
      border-bottom: 1px solid $border-color;
      background: $color-Light;
      height: 40px;
      >div{
        display: flex;
        align-items: center;
        &.tagLeft{
          .icon{
            color: #999;
            margin-right: 5px;
            width: 20px;
            height: 20px;
          }
        }
        &.tagRight{
          a{
            display: inline-block;
            margin-right: 5px;
          }
          .el-button{
            width: 25px;
            height: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
          }

        }
      }
    }
}
.addTag{
  margin: 10px 0 20px 0;
  display: flex;
  justify-content: center;
  a{
    display: inline-block;
    font-size: 16px;
    padding: 5px 20px;
    background: $color-lowLight;
    color: #fff;
    &:hover{
      background: $color-highLight;
      color: #fff;
    }
  }
}
body{
 .el-popconfirm__main{
  font-size: 14px;
   margin-bottom: 5px;
}
 .el-button--text{
  color: $color-lowLight;
  &:hover{
    color: $color-highLight;
  }
}
 .el-button--primary{
  background: $color-lowLight;
  border: none;
  &:hover{
    background: $color-highLight;
  }
}
  .el-button--primary{
}
}
</style>