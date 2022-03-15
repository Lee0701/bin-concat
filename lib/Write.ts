import { closeSync, openSync, writeSync } from 'fs';

export function write (path:string, buffer:Buffer):Buffer {
	const fd = openSync(path, 'w');
	writeSync(fd, buffer, 0, buffer.length, 0);
	closeSync(fd);
	return buffer;
}
