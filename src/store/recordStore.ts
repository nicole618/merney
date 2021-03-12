import recordListModel from '@/models/recordListModel';
const recordStore ={
  recordList(){return recordListModel.fetch()},
  addRecord(record: RecordItem){
    recordListModel.create(record);
  },
}

export default recordStore;