"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const fs = __importStar(require("fs"));
const resizer = (name, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    const mainImage = path_1.default.resolve(`./image/${name}.jpg`);
    const outputImage = path_1.default.resolve(`./thumbnails/${name}-${width}-${height}.jpg`);
    // Applying cache for repeated use.
    // see if the called image already exists.
    // If it does exist => return it instead of making it again.
    if (fs.existsSync(outputImage)) {
        return outputImage;
    }
    return new Promise((resolve, reject) => {
        // If it doesn't so lets produce it using #sharp and file system.
        (0, sharp_1.default)(mainImage)
            .resize({
            width: parseInt(width),
            height: parseInt(height)
        })
            .toFile(outputImage).then(() => {
            resolve(outputImage);
        }).catch((err) => {
            reject(err);
        });
        // After the image is produced, now we can send it as a respond to the request from the route.
    });
});
exports.default = resizer;
