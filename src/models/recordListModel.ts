import clone from '@/lib/clone';
import {createRecordId} from '@/lib/createId';

const localStorageKeyName: string = 'recordListModel';

const recordListModel = {
  data: [] as RecordItem[],
  create(record: RecordItem){
    if (record.dateTime === null) record.dateTime = new Date();
    record.id = createRecordId();
    const record2 = clone(record);
    this.data.push(record2);
    this.save();
  },
  fetch(){
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName)||'[]') as RecordItem[];
    return this.data
  },
  save() {
    window.localStorage.setItem(localStorageKeyName,JSON.stringify(this.data));
  }
};

export default recordListModel;
