"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const processor = express_1.default.Router();
processor.get('/', (req, res) => {
    res.send('MEK');
});
exports.default = processor;
