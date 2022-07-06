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
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const processor_1 = __importDefault(require("../../util/processor"));
const fs = __importStar(require("fs"));
const processor = express_1.default.Router();
processor.get('/', (req, res) => {
    try {
        const name = req.query.name;
        const width = req.query.width;
        const height = req.query.height;
        const mainImage = path_1.default.resolve(`./image/${name}.jpg`);
        // First lets see if the image we want to resize exists.
        if (fs.existsSync(mainImage)) {
            // If it does exist then lets see if the user entered a valid Width and Height.
            if (isNaN(width) || typeof width === 'undefined' || width === null) {
                res.send('Please enter a width');
            }
            else if (isNaN(height) || typeof height === 'undefined' || height === null) {
                res.send('Please enter a height');
            }
            else { // If he entered a valid Width and Height then lets produce the image using the resize function.
                (0, processor_1.default)(name, width, height).then((outputImage) => __awaiter(void 0, void 0, void 0, function* () {
                    const img = yield fs.promises.readFile(outputImage).catch((error) => {
                        throw error;
                    });
                    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                    res.end(img, 'binary');
                })).catch((error) => {
                    res.status(400).send({
                        message: error.message
                    });
                });
            }
        }
        else { // If the image name does not exist, then an error showed to the user.
            res.send('Please enter a valid image name');
        }
    }
    catch (err) { // Handling error if anything went wrong in the above code.
        res.send(err + 'Please enter valid input.');
    }
});
exports.default = processor;
