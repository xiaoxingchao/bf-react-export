import { a } from './js/a';
import addArray from './js/b';
// import XLSX from 'xlsx'
import debug from 'debug';

// 添加json
import pkg from '../package.json';
console.log( `running version ${pkg.dependencies}` ); // 控制台输出 running version 1.0.0

const log = debug('app:log');

if (ENV !== 'production') {
  // Enable the logger.
  debug.enable('*');
  log('Logging is enabled!');
} else {
  debug.disable();
}


const res1 = a('kongzhi');
const res2 = addArray([1, 2, 3, 4]);


// Print the results on the page.
const printTarget = document.getElementsByClassName('debug__output')[0];

printTarget.innerText = `sayHelloTo('Jason') => ${res1}\n\n`;
printTarget.innerText += `addArray([1, 2, 3, 4]) => ${res2}`;