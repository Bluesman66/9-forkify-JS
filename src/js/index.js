import str from './models/Search';
//import { add as a, multiply as m, ID } from './views/searchView';
import * as searchView from './views/searchView';

//console.log(`Using imported functions! add: ${a(ID, 2)} multiply: ${m(3, 5)} str: ${str}`);
console.log(`Using imported functions! add: ${searchView.add(searchView.ID, 2)} multiply: ${searchView.multiply(3, 5)} str: ${str}`);