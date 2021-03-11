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
}