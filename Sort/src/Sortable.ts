export interface Sortable {
  length: number;
  swap(lIndex: number, rIndex: number): void;
  compare(lIndex: number, rIndex: number): boolean;
}
