import express from "express";
import auth from "../../middleware/auth";
import userCtrl from "../../controller/userCtrl";

const authRouter = express.Router();
authRouter.post("/signup", userCtrl.signup);
authRouter.post("/signin", userCtrl.signin);
authRouter.get("/signout", userCtrl.signout);
authRouter.get("/info", auth, userCtrl.getInfo);
authRouter.get("/refreshtoken", userCtrl.refreshToken);
export default authRouter;
