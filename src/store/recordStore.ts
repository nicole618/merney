import {createRecordId} from '@/lib/createId';
import clone from '@/lib/clone';

const localStorageKeyName: string = 'recordListModel';
const recordStore ={
  recordList: [] as RecordItem[],
  fetchRecord(){
    this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName)||'[]') as RecordItem[];
    return this.recordList;
  },
  saveRecord() {
    window.localStorage.setItem(localStorageKeyName,JSON.stringify(this.recordList));
  },
  createRecord(record: RecordItem){
    if (record.dateTime === null) record.dateTime = new Date();
    record.id = createRecordId();
    const record2 = clone(record);
    this.recordList.push(record2);
    this.saveRecord();
  }
}

recordStore.fetchRecord();

export default recordStore;