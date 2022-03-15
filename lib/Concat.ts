export function append (dst:Buffer, src:Buffer):Buffer {
	return Buffer.concat([
		dst, src
	]);
}
