import faker from 'faker';
import { Markable } from './Markable';

export class User implements Markable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  // makerContent(): string {
  //   return `Name: ${this.name}`;
  // }
}

export default User;
