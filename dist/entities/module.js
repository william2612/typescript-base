"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = void 0;
class Module {
    constructor(name) {
        this.lectures = [];
        this.name = name;
    }
    add(lecture) {
        this.lectures.push(lecture);
    }
}
exports.Module = Module;
