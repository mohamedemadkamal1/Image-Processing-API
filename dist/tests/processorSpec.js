"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-undef */
const path_1 = __importDefault(require("path"));
const processor_1 = __importDefault(require("../util/processor"));
it('It should return a resized Image', () => {
    expect((0, processor_1.default)('wolf', 300, 300)).toBeTruthy();
});
it('should return a resized Image', () => {
    const img = (0, processor_1.default)('wolf', 300, 300);
    img.then((outputImage) => {
        expect(outputImage).toBe(path_1.default.resolve('./thumbnails/wolf-300-300.jpg'));
    });
});
