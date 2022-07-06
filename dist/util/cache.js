"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const cacher = (req, res, next) => {
    const location = path_1.default.resolve('./thumb/resizedImage.jpg');
    if (location) {
        res.sendFile(location);
    }
    else {
        next();
    }
};
exports.default = cacher;
