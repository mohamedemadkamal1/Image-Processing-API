"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
const express_1 = __importDefault(require("express"));
const sizingRoute_1 = __importDefault(require("./routes/api/sizingRoute"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = 3000;
app.use('/Main', routes_1.default);
app.use('/sizing', sizingRoute_1.default);
app.listen(port, () => {
    console.log(`Server is working at http://localhost:${port}`);
});
exports.default = app;
