"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.write = void 0;
const fs_1 = require("fs");
function write(path, buffer) {
    const fd = (0, fs_1.openSync)(path, 'w');
    (0, fs_1.writeSync)(fd, buffer, 0, buffer.length, 0);
    (0, fs_1.closeSync)(fd);
    return buffer;
}
exports.write = write;
//# sourceMappingURL=Write.js.map