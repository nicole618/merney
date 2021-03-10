<template>
  <div>
    <Layout>
      {{record}}
      <Types :value.sync="record.type"/>
      <Tags :value.sync="record.tags" :date-source="tags"/>
      <DateTime :value.sync="record.dateTime"/>
      <Notes @update:value="onUpdateNotes" :value="record.notes"/>
      <NumberPad :value="record.amount" @update:value="onUpdateAmount"/>
    </Layout>
  </div>
</template>

<script lang="ts">
type Tag = {
  id: number;
  name: string;
  value: string;

}
type Record = {
  tags:  Tag | null;
  notes: string;
  type: string;
  dateTime: Date | null;
  amount: number;
}
import Tags from '@/components/money/Tags.vue'
import Types from '@/components/money/Types.vue'
import Notes from '@/components/money/Notes.vue'
import NumberPad from '@/components/money/NumberPad.vue'
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import DateTime from '@/components/money/DateTime.vue';




@Component({
             components: {DateTime, NumberPad, Notes, Types, Tags}
           })
export default class Money extends Vue{
  tags= [
        {
          id: 1,
          name: 'clothing',
          value:'衣'
        },
        {
          id: 2,
          name: 'food',
          value:'食'
        },
        {
          id: 3,
          name: 'live',
          value:'住'
        },
        {
          id: 4,
          name: 'travel',
          value:'行'
        }
      ]

  record: Record = {tags:null,notes:'',dateTime:null,type:'-',amount:0}
  onUpdateNotes(value: string){
    this.record.notes = value;
  }
  onUpdateAmount(value: string){
    this.record.amount = parseFloat(value);
  }
}
</script>

<style lang="scss" scoped>


</style>

