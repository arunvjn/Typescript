import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  data: number[];
  get length(): number {
    return this.data.length;
  }
  swap(lIndex: number, rIndex: number): void {
    const temp = this.data[lIndex];
    this.data[lIndex] = this.data[rIndex];
    this.data[rIndex] = temp;
  }
  compare(lIndex: number, rIndex: number): boolean {
    return this.data[lIndex] > this.data[rIndex];
  }

  constructor(data: number[]) {
    super();
    this.data = data;
  }
}
