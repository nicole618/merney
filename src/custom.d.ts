type Tag = {
  id: number;
  name: string;
  textValue: string;
  type: string;
}
  type RecordItem = {
  id?: number;
  tags:  Tag | null;
  notes: string;
  type: string;
  dateTime: Date | null;
  amount: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Window {
  tagList: () => Tag[];
  recordList: () => RecordItem[];
  deleteTag: (id: number) => void;
  addTag: (tag: Tag) => Tag;
  getIcon: () => string[];
  findTag: (id: number) => Tag;
  updateTag: (tag: Tag) => void;
  addRecord: (record: RecordItem) => void;
}