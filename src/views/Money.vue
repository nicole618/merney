<template>
  <div>
    <Layout>
      {{record}}
      <Types :value.sync="record.type"/>
      <Tags :value.sync="record.tags" :date-source="tagsTye"/>
      <DateTime :value.sync="record.dateTime"/>
      <Notes @update:value="onUpdateNotes" :value="record.notes"/>
      <NumberPad :value="record.amount" @update:value="onUpdateAmount" @submit="saveRecord"/>
    </Layout>
  </div>
</template>

<script lang="ts">
import Tags from '@/components/money/Tags.vue';
import Types from '@/components/money/Types.vue';
import Notes from '@/components/money/Notes.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import DateTime from '@/components/money/DateTime.vue';
import model from '@/model';

@Component({
             components: {DateTime, NumberPad, Notes, Types, Tags}
           })
export default class Money extends Vue {
  tags = [
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
  recordList = model.fetch();
  record: RecordItem = {tags: null, notes: '', dateTime: null, type: '-', amount: 0};
  tagsTye = this.tags.filter(tag=>tag.type === this.record.type)
  @Watch('record.type')
  onRecordTypeChange(value: string){

    this.tagsTye = this.tags.filter(tag=>tag.type === value);
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    if (this.record.dateTime === null) this.record.dateTime = new Date();
    const record2 = model.clone(this.record);
    this.recordList.push(record2);
    this.record = {tags: null, notes: '', dateTime: null, type: '-', amount: 0};
  }

  @Watch('recordList')
  onRecordListChange() {
    model.save(this.recordList);
  }
}
</script>


