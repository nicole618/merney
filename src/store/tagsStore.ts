import {createTagId} from '@/lib/createId';

const localStorageKeyName: string = 'tagList';
const tagsStore ={
  tagList: [] as Tag[],
  fetchTag(){
    this.tagList = JSON.parse(window.localStorage.getItem(localStorageKeyName)|| JSON.stringify(this.getDefaultTag()));
    return this.tagList;
  },
  saveTags(){
    window.localStorage.setItem(localStorageKeyName,JSON.stringify(this.tagList));
  },
  deleteTag(id: number){
    const tagIds = this.tagList.map(tag => tag.id === id);
    if (tagIds.length === 0){
      return '该标签不存在';
    }else{
      this.tagList = this.tagList.filter(tag => tag.id !== id);
      this.saveTags();
      return '删除成功';
    }
  },
  addTag(tag: Tag){
    tag.id = createTagId();
    this.tagList.push(tag);
    this.saveTags();
    return tag;
  },
  findTag(id: number){
    return this.tagList.filter(tag => tag.id === id)[0];
  },
  updateTag(tag: Tag){
    const oldTag: Tag = this.findTag(tag.id);
    oldTag.name = tag.name;
    oldTag.textValue = tag.textValue;
    this.saveTags();
  },
  getIcon(){
    return ['clothing','food','live','travel','wages','stock','fiscal','lottery',
      'custom1','custom2','custom3','custom4','custom5','custom6','custom7','custom8'];
  },
  getDefaultTag(){
    return [
      {
        id: 1,
        name: 'clothing',
        textValue: '衣',
        type: '-'
      },
      {
        id: 2,
        name: 'food',
        textValue: '食',
        type: '-'
      },
      {
        id: 3,
        name: 'live',
        textValue: '住',
        type: '-'
      },
      {
        id: 4,
        name: 'travel',
        textValue: '行',
        type: '-'
      },
      {
        id: 5,
        name: 'wages',
        textValue: '工资',
        type: '+'
      },
      {
        id: 6,
        name: 'stock',
        textValue: '股票',
        type: '+'
      },
      {
        id: 7,
        name: 'fiscal',
        textValue: '理财',
        type: '+'
      },
      {
        id: 8,
        name: 'lottery',
        textValue: '彩票',
        type: '+'
      }
    ]
  }
}
tagsStore.fetchTag();
export default tagsStore;