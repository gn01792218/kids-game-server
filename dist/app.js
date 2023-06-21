"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //ts 中可以使用import語法
const body_parser_1 = __importDefault(require("body-parser"));
const exampleRESTAPI_1 = __importDefault(require("./routes/exampleRESTAPI"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.use(exampleRESTAPI_1.default);
app.listen(port, () => console.log(`監聽${port}}`));
