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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crawlWebsite = void 0;
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
const crawlWebsite = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios_1.default.get(url);
    const $ = cheerio_1.default.load(data);
    // Coleta os títulos <h1> como exemplo
    const titles = [];
    $("h1").each((_, element) => {
        titles.push($(element).text().trim());
    });
    return {
        url,
        titles,
    };
});
exports.crawlWebsite = crawlWebsite;
