import tagsStore from '@/store/tagsStore';
import recordStore from '@/store/recordStore';

const store = {
  ...tagsStore,
  ...recordStore
}

export default store;