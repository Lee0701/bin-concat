import { read, write, append } from '../lib/index';
const js = JSON.stringify;

let file:string = 'a.file';

let a:any = Buffer.from([0x00, 0x01]);
console.log(`a = Buffer.from([0x00, 0x01]) : ${js(a)}`);
a.result = write(file, a);
console.log(`write(${file}', a) : ${js(a.result)}`);
a.result = read(file);
console.log(`read('${file}') : ${js(a.result)}`);
a = a.result;

file = 'b.file';

let b:any = Buffer.from([0x02, 0x03]);
console.log(`b = Buffer.from([0x02, 0x03]) : ${js(b)}`);
b.result = write(file, b);
console.log(`write(${file}', b) : ${js(b.result)}`);
b.result = read(file);
console.log(`read('${file}') : ${js(b.result)}`);
b = b.result;

const ab:any = append(a, b);
console.log(`ab = append(a, b) : ${js(ab)}`);
