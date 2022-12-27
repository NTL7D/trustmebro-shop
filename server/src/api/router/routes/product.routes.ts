import { Router } from "express";
import auth from "../../middleware/auth";
import adminAuth from "../../middleware/admin";
import productCtrl from "../../controller/productCtrl";

export const router = Router();

router
    .route("/")
    .get(productCtrl.getProduct)
    .post(auth, adminAuth, productCtrl.createProduct);
router
    .route("/:id")
    .get(productCtrl.getById)
    .put(auth, adminAuth, productCtrl.updateProduct)
    .delete(auth, adminAuth, productCtrl.deleteProduct);
