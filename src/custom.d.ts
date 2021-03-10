type Tag = {
  id: number;
  name: string;
  value: string;

}
  type RecordItem = {
  tags:  Tag | null;
  notes: string;
  type: string;
  dateTime: Date | null;
  amount: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Window {
}