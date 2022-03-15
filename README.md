# bin-concat
## Append(...datas);
### Install
```npm i github:Lee0701/bin-concat```
or
```yarn add github:Lee0701/bin-concat```
### Usage
```
// TypeScript
import { read, write, append } from '@Lee0701/bin-concat';
// JavaScript(nodejs)
const { read, write, append } = require('@Lee0701/bin-concat');

const a = read('a.file'); // Buffer: 00 01
const b = read('b.file'); // Buffer: 02 03
const ab = append(a, b); // Buffer: 00 01 02 03
write('ab.file', ab); // Buffer: 00 01 02 03
```
