"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const crawler_controller_1 = require("../controllers/crawler.controller");
const router = (0, express_1.Router)();
router.get("/", crawler_controller_1.crawlUrl);
exports.default = router;
