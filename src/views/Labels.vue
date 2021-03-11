<template>
  <div>
    <Layout>
      <Types :value.sync="type"/>
      <ol class="tagList">

      </ol>
    </Layout>
  </div>
</template>

<script lang="ts">

import Types from '@/components/money/Types.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component({
             components: {Types},
           })
export default class Labels extends Vue{
  type: string = '-'
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
  tagsType = this.tags.filter(tag => tag.type === this.type)
}
</script>

<style lang="scss" scoped>

</style>