const localStorageKeyName: string = 'tagList';

const tagListModel = {
  data: [] as Tag[],
  fetch(){
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName)|| JSON.stringify(this.getDefaultTag()));
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName,JSON.stringify(this.data));
  },
  delete(id: number) {
    const tagIds = this.data.map(tag => tag.id === id);
    if (tagIds.length === 0){
      return '该标签不存在';
    }else{
      this.data = this.data.filter(tag => tag.id !== id);
      this.save();
      return '删除成功';
    }
  },
  updateTag(tag: Tag){
    const oldTag: Tag = this.findTag(tag.id);
    oldTag.name = tag.name;
    oldTag.textValue = tag.textValue;
    this.save();
  },
  addTag(tag: Tag){
    this.data.push(tag);
    this.save();
    return tag;
  },
  findTag(id: number){
    return this.data.filter(tag => tag.id === id)[0];
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
};

export default tagListModel;
