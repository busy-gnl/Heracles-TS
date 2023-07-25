"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shield {
    constructor(name, protection) {
        this.protection = 10;
        this.name = name;
        this.protection = protection;
    }
    getProtection() {
        return this.protection;
    }
    getName() {
        return this.name;
    }
}
exports.default = Shield;
