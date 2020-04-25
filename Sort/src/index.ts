import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([5, -3, 4]);
numbers.sort();
console.log(numbers);
const string = new CharactersCollection('bxAyA');
// let sorter = new Sorter(numbers);
string.sort();
console.log(string);
// sorter = new Sorter(strings);
// sorter.sort();
// console.log(strings);
let LinkedList1 = new LinkedList();
LinkedList1.add(5);
LinkedList1.add(3);
LinkedList1.add(4);
LinkedList1.add(-3);
LinkedList1.add(-1);
LinkedList1.sort();
LinkedList1.print();
// let sorter = new Sorter(LinkedList1);
// sorter.sort();
// LinkedList1.print();
