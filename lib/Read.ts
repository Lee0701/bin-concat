import { readFileSync } from 'fs';

export function read (path:string): Buffer {
	return readFileSync(path);
}
