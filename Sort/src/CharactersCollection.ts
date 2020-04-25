import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  constructor(data: string) {
    super();
    this.data = data;
  }
  data: string;
  get length(): number {
    return this.data.length;
  }
  swap(lIndex: number, rIndex: number): void {
    const characters = this.data.split('');
    const temp = characters[lIndex];
    characters[lIndex] = characters[rIndex];
    characters[rIndex] = temp;
    this.data = characters.join('');
  }
  compare(lIndex: number, rIndex: number): boolean {
    return this.data[lIndex].toLowerCase() > this.data[rIndex].toLowerCase();
  }
}
