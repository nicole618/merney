import tagListModel from '@/models/tagListModel';

const tagsStore ={
  tagList(){return tagListModel.fetch()},
  deleteTag(id: number){
    return tagListModel.delete(id);
  },
  addTag(tag: Tag){
    return tagListModel.addTag(tag);
  },
  getIcon(){
    return tagListModel.getIcon();
  },
  findTag(id: number){
    return tagListModel.findTag(id);
  },
  updateTag: (tag: Tag) => {
    tagListModel.updateTag(tag);
  }
}

export default tagsStore;