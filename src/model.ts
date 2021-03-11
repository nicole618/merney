const localStorageKeyName: string = 'recordList';
const model = {
  clone(data: RecordItem | RecordItem[]){
    return JSON.parse(JSON.stringify(data));
  },
  fetch(){
    return JSON.parse(window.localStorage.getItem(localStorageKeyName)||'[]') as RecordItem[];
  },
  save(data: RecordItem[]) {
    window.localStorage.setItem(localStorageKeyName,JSON.stringify(data));
  },
  getIcons(){
    const iconList = ['clothing','food','live','travel','wages','stock','fiscal','lottery',
      'custom1','custom2','custom3','custom4','custom5','custom6','custom7','custom8'];
    return iconList;
  }
};

export default model;
