"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crawlUrl = void 0;
const crawler_service_1 = require("../services/crawler.service");
const crawlUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url = req.query.url;
    try {
        const data = yield (0, crawler_service_1.crawlWebsite)(url);
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao acessar a URL." });
    }
});
exports.crawlUrl = crawlUrl;
