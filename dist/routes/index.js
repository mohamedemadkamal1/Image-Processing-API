"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mainAPI = express_1.default.Router();
mainAPI.get('/', (req, res) => {
    res.send('Welcome to image resizer API');
});
exports.default = mainAPI;
