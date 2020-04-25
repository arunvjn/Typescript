"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CSVFilterReader = /** @class */ (function () {
    function CSVFilterReader(fileName) {
        this.data = [];
        this.fileName = fileName;
    }
    CSVFilterReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.fileName, { encoding: 'utf-8' })
            .split('\n')
            .map(function (match) { return match.split(','); })
            .map(this.mapRow);
    };
    return CSVFilterReader;
}());
exports.CSVFilterReader = CSVFilterReader;
