import { Sorter } from './Sorter';

class LNode {
  val: number;
  next: LNode | null = null;
  constructor(val: number) {
    this.val = val;
  }
}

export class LinkedList extends Sorter {
  head: LNode | null = null;

  add(val: number): void {
    const node = new LNode(val);
    if (!this.head) {
      this.head = node;
    } else {
      let tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = node;
    }
  }

  get length(): number {
    if (!this.head) return -0;
    let node = this.head;
    let length = 1;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  remove(val: number): void {
    if (!this.head) return;
    let node = this.head;
    while (node) {}
  }

  at(index: number): LNode {
    if (!this.head) throw new Error('Index out of bounds');
    let node: LNode | null = this.head;
    let counter = 0;
    while (node) {
      if (counter == index) return node;
      counter++;
      node = node.next;
    }
    throw new Error('Index out of bounds');
  }

  swap(lIndex: number, rIndex: number): void {
    const lNode = this.at(lIndex);
    const rNode = this.at(rIndex);
    const temp = lNode.val;
    lNode.val = rNode.val;
    rNode.val = temp;
  }
  compare(lIndex: number, rIndex: number): boolean {
    return this.at(lIndex).val > this.at(rIndex).val;
  }

  print(): void {
    if (!this.head) return;
    let node: LNode | null = this.head;
    while (node) {
      console.log(node.val);
      node = node.next;
    }
  }
}
