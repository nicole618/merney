const localStorageKeyName: string = 'tagList';
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  save: () => void;
  getIcon: () => string[];
  getDefaultTag: () => Tag[];
  addTag: (tag: Tag) => Tag;
}
const tagListModel: TagListModel = {
  data: [],
  fetch(){
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName)|| JSON.stringify(this.getDefaultTag()));
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName,JSON.stringify(this.data));
  },
  addTag(tag){
    this.data.push(tag);
    this.save();
    return tag;
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
    ]
  }
};

export default tagListModel;
