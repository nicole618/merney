<template>
  <div>
    <Layout>
      <Types :value.sync="record.type"/>
      <Tags :value.sync="record.tags" :date-source="tagsTye"/>
      <DateTime :value.sync="record.dateTime"/>
      <Notes  :value.sync="record.notes" noteName="备注：" placeholder="请输入备注"/>
      <NumberPad :value="record.amount" @update:value="onUpdateAmount" @submit="saveRecord"/>
    </Layout>
  </div>
</template>

<script lang="ts">
import Tags from '@/components/money/Tags.vue';
import Types from '@/components/Types.vue';
import Notes from '@/components/money/Notes.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import DateTime from '@/components/money/DateTime.vue';
import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';
import {createRecordId} from '@/lib/createId'

tagListModel.fetch();
@Component({
             components: {DateTime, NumberPad, Notes, Types, Tags}
           })
export default class Money extends Vue {
  tags = tagListModel.data;
  recordList = recordListModel.fetch();
  record: RecordItem = {tags: null, notes: '', dateTime: null, type: '-', amount: 0};
  tagsTye = this.tags.filter(tag=>tag.type === this.record.type)
  @Watch('record.type')
  onRecordTypeChange(value: string){
    this.tagsTye = this.tags.filter(tag=>tag.type === value);
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    if (this.record.dateTime === null) this.record.dateTime = new Date();
    this.record.id = createRecordId();
    const record2 = recordListModel.clone(this.record);
    this.recordList.push(record2);
    this.record = {tags: null, notes: '', dateTime: null, type: '-', amount: 0};
  }

  @Watch('recordList')
  onRecordListChange() {
    recordListModel.save(this.recordList);
  }
}
</script>


