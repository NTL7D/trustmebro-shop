import { Router } from "express";
import cateCtrl from "../../controller/cateCtrl";
import auth from "../../middleware/auth";
import adminAuth from "../../middleware/admin";

export const router = Router();

router
    .route("/")
    .get(cateCtrl.allCate)
    .post(auth, adminAuth, cateCtrl.createCate);
router
    .route("/:id")
    .get(cateCtrl.getById)
    .put(auth, adminAuth, cateCtrl.updateCate)
    .delete(auth, adminAuth, cateCtrl.deleteCate);
