"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const admin_1 = __importDefault(require("../../middleware/admin"));
const multer_1 = __importDefault(require("multer"));
const multer_2 = require("../../libs/multer");
const productCtrl_1 = __importDefault(require("../../controller/productCtrl"));
//multer setup
const upload = (0, multer_1.default)({
    storage: multer_2.productStorage,
    fileFilter: multer_2.filter,
    limits: { fileSize: 8 * 1024 * 1024 },
});
const productRouter = express_1.default.Router();
productRouter
    .route("/")
    .get(productCtrl_1.default.getProduct)
    .post(auth_1.default, admin_1.default, upload.single("image"), productCtrl_1.default.createProduct);
productRouter
    .route("/:id")
    .put(auth_1.default, admin_1.default, upload.single("image"), productCtrl_1.default.updateProduct)
    .delete(auth_1.default, admin_1.default, productCtrl_1.default.deleteProduct);
exports.default = productRouter;
