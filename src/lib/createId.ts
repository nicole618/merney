
const tagLocalStorageKey = '_tagIdMax';
const recordLocalStorage = '_recordIdMax'
let  tagId: number =parseInt(window.localStorage.getItem(tagLocalStorageKey) || '8') ;
let  recordId: number =parseInt(window.localStorage.getItem(recordLocalStorage) || '0') ;
function createTagId(){
  tagId++;
  window.localStorage.setItem(tagLocalStorageKey,tagId.toString());
  return tagId;
}

function createRecordId(){
  recordId++;
  window.localStorage.setItem(recordLocalStorage,recordId.toString());
  return recordId;
}

export  {createTagId,createRecordId};
