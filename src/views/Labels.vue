<template>
  <div>
    <Layout>
      <Types :value.sync="type"/>
      <ol class="tagList hideScroll">
        <li v-for="tag in tagsType" :key="tag.id">
          <div class="tagLeft">
            <Icon :name="tag.name"/>
            <span>{{tag.textValue}}</span>
          </div>
          <div class="tagRight">
            <router-link :to="{path:'/labels/editAdd/:'+tag.id, query:{typeName:typeName}}"><el-button type="primary" icon="el-icon-edit" circle></el-button></router-link>
            <el-popconfirm title="确认删除此标签吗？" @confirm="deleteTag(tag.id)"
            ><el-button type="danger" icon="el-icon-delete" circle slot="reference"></el-button>
            </el-popconfirm>
          </div>
        </li>
      </ol>
      <div class="addTag">
        <router-link :to="{path:'/labels/editAdd', query:{typeName:typeName}}" >新增{{typeName}}标签</router-link>
      </div>

    </Layout>
  </div>
</template>

<script lang="ts">

import Types from '@/components/Types.vue';
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import store from '@/store/index2';



@Component({
             components: {Types},
           })
export default class Labels extends Vue {
  type: string = '-';
  tags: Tag[] = store.fetchTag();
  tagsType = this.tags.filter(tag => tag.type === this.type);
  visible: boolean = false;
  typeName = '支出';

  @Watch('type')
  onRecordTypeChange(value: string){
    this.tagsType = this.tags.filter(tag => tag.type === value);
    value === '-'?this.typeName ='支出' : this.typeName = '收入';
  }
  deleteTag(id: number){
    store.deleteTag(id);
    this.tags = store.fetchTag();
    this.tagsType = this.tags.filter(tag => tag.type === this.type)
    console.log(this.tagsType);
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

</style>