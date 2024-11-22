"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const crawler_routes_1 = __importDefault(require("./routes/crawler.routes"));
const app = (0, express_1.default)();
// Middleware para JSON (caso precise no futuro)
app.use(express_1.default.json());
// Rotas
app.use("/crawl", crawler_routes_1.default);
exports.default = app;
