import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const map = new CustomMap('map-container');

map.addMarker(new User());
map.addMarker(new Company());
