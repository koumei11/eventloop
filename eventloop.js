const fs = require('fs');

// Mainline
console.log('Hello, ----------- mainline');
console.log('world. ----------- mainline');

const path = require('path');

console.log('script start');

setImmediate(() => console.log('setImmediate'));
fs.lstat(path.join(__dirname, 'test.js'), () => console.log('fs'));
setTimeout(() => console.log('setTimeout'), 0);

console.log('script end');

// end mainline / pre timers phase 1
// process.nextTick(() => {
//   console.log('nexttick --------- before event loop');
// });

// // timers phase 1
// setTimeout(() => {
//   console.log('timeout - 0s ----- Timers 1');
//   // callback().then(res => console.log(res));
// }, 0);

// // timers phase 1
// setImmediate(() => {
//   console.log('immediate -------- Timers 1');
//   // callback().then(res => console.log(res));
// });

// // timers phase 1
// setTimeout(() => {
//   console.log('timeout - 0s ----- Timers 1');
//   // callback().then(res => console.log(res));
// }, 0);

// begin polling phase
// fs.readFile(__filename, () => {
//   // end poll phase
//   process.nextTick(() => {
//     console.log('nexttick i/o ----- After Polling');
//   });
//   // check phase
//   setImmediate(() => {
//     console.log('immediate i/o ---- Check');
//   });
//   // timers phase 2
//   setTimeout(() => {
//     console.log('timeout i/0 0s --- Timers 2');
//   }, 0);
//   // callback().then(res => console.log(res));
//   // timers phase 3
//   setTimeout(() => {
//     console.log('timeout i/0 3s --- Timers 3');
//   }, 3000);
// });

// async function callback() {
//   return 'callback';
// }

// callback().then(res => console.log(res));

// timers phase 4
// setTimeout(() => {
//   console.log('timeout - 5s ----- Timers 4');
// }, 5000);
 
// process.on('beforeExit', () => {
//   console.log('process.on ------- beforeExit');
// });

// const fs = require('fs');

// setTimeout(() => {
//   console.log('Print Fifth');
// }, 1000);

// setImmediate(() => {
//   console.log('Print Third');
// });

// setTimeout(() => {
//   console.log('Print Second');
// }, 0);

// console.log('Print First');

// fs.readFile(__filename, () => {
//   console.log('Print Forth');
// });

