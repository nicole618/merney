<template>
  <div>
    <Layout>
      <Types :value.sync="record.type"/>
      <Tags :value.sync="record.tags" :date-source="tagsTye" :recordType="record.type"/>
      <DateTime :value.sync="record.dateTime" date-time-type="date" date-time-format="yyyy-MM-dd"/>
      <Notes  :value.sync="record.notes" noteName="备注：" placeholder="请输入备注"/>
      <NumberPad :value="record.amount" @update:value="onUpdateAmount" @submit="saveRecord" :change-amount="changeAmount"/>
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
import store from '@/store/index2';


@Component({
             components: {DateTime, NumberPad, Notes, Types, Tags}
           })
export default class Money extends Vue {
  tags: Tag[] = store.fetchTag();
  changeAmount: Boolean = false;
  record: RecordItem = {tags: null, notes: '', dateTime: new Date(), type: '-', amount: 0};
  tagsTye = this.tags.filter(tag=>tag.type === this.record.type)
  @Watch('record.type')
  onRecordTypeChange(value: string){
    this.tagsTye = this.tags.filter(tag=>tag.type === value);
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }
  saveRecord() {
    if (this.record.amount === 0 || this.record.tags === null){
      if(document.querySelectorAll('.el-message').length === 0){
        this.$message({
          duration:1000,
          message:'记账金额或记账分类不能为空',
          type:'warning'
           });
      }
      return;
    }
    store.createRecord(this.record);
    this.changeAmount = true;
    setTimeout(()=>this.changeAmount = false,1000)
    const oldType = this.record.type;
    this.record = {tags: null, notes: '', dateTime: new Date(), type: oldType, amount: 0};
    if(document.querySelectorAll('.el-message').length === 0) {
      this.$message({
                      duration:1000,
                      message:'保存成功',
                      type:'success'
                    });
    }
  }
}
</script>


