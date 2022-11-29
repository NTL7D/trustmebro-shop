"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cateCtrl_1 = __importDefault(require("../../controller/cateCtrl"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const admin_1 = __importDefault(require("../../middleware/admin"));
const cateRouter = express_1.default.Router();
cateRouter
    .route("/")
    .get(cateCtrl_1.default.allCate)
    .post(auth_1.default, admin_1.default, cateCtrl_1.default.createCate);
cateRouter
    .route("/:id")
    .get(cateCtrl_1.default.getById)
    .put(auth_1.default, admin_1.default, cateCtrl_1.default.updateCate)
    .delete(auth_1.default, admin_1.default, cateCtrl_1.default.deleteCate);
exports.default = cateRouter;
