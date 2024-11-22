"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUrl = void 0;
const validateUrl = (req, res, next) => {
    const url = req.query.url;
    if (!url) {
        return res.status(400).json({ error: "O parâmetro 'url' é obrigatório." });
    }
    try {
        new URL(url); // Valida a URL
        next();
    }
    catch (error) {
        return res.status(400).json({ error: "URL inválida." });
    }
};
exports.validateUrl = validateUrl;
