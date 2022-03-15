"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.read = void 0;
const fs_1 = require("fs");
function read(path) {
    return (0, fs_1.readFileSync)(path);
}
exports.read = read;
//# sourceMappingURL=Read.js.map