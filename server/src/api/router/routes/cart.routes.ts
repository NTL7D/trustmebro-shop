import { Router } from "express";
import cartCtrl from "../../controller/cartCtrl";
import auth from './../../middleware/auth';

export const router = Router();

router.post("/add", auth, cartCtrl.addCart);
