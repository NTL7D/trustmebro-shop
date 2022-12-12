import { Router } from "express";
import auth from "../../middleware/auth";
import userCtrl from "../../controller/userCtrl";

export const router = Router();

router.post("/signup", userCtrl.signup);
router.post("/signin", userCtrl.signin);
router.get("/signout", userCtrl.signout);
router.get("/info", auth, userCtrl.getInfo);
router.get("/refreshtoken", userCtrl.refreshToken);
