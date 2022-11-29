"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = exports.productStorage = void 0;
const multer_1 = __importDefault(require("multer"));
exports.productStorage = multer_1.default.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "images");
    },
    filename: (req, file, callback) => {
        callback(null, `${Date.now()}-${file.originalname}`);
    },
});
const filter = (req, file, callback) => {
    if (file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png") {
        callback(null, true);
    }
    else {
        callback(null, false);
    }
};
exports.filter = filter;
