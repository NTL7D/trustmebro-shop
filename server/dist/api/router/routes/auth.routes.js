"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const userCtrl_1 = __importDefault(require("../../controller/userCtrl"));
const authRouter = express_1.default.Router();
authRouter.post("/signup", userCtrl_1.default.signup);
authRouter.post("/signin", userCtrl_1.default.signin);
authRouter.get("/signout", userCtrl_1.default.signout);
authRouter.get("/info", auth_1.default, userCtrl_1.default.getInfo);
authRouter.get("/refreshtoken", userCtrl_1.default.refreshToken);
exports.default = authRouter;
