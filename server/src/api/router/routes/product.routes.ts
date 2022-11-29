import express from "express";
import auth from "../../middleware/auth";
import adminAuth from "../../middleware/admin";
import multer from "multer";
import { productStorage, filter } from "../../libs/multer";
import productCtrl from "../../controller/productCtrl";
//multer setup
const upload = multer({
    storage: productStorage,
    fileFilter: filter,
    limits: { fileSize: 8 * 1024 * 1024 },
});
const productRouter = express.Router();
productRouter
    .route("/")
    .get(productCtrl.getProduct)
    .post(auth, adminAuth, upload.single("image"), productCtrl.createProduct);
productRouter
    .route("/:id")
    .put(auth, adminAuth, upload.single("image"), productCtrl.updateProduct)
    .delete(auth, adminAuth, productCtrl.deleteProduct);

export default productRouter;
