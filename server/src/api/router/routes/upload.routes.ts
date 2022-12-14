import { Router } from "express";
import uploadCtrl from "../../controller/uploadCtrl";
import { upload } from "../../libs/multer";
import auth from "../../middleware/auth";
import adminAuth from "../../middleware/admin";

export const router = Router();

router.post(
    "/",
    auth,
    adminAuth,
    upload.single("image"),
    uploadCtrl.uploadImg
);

router.delete("/:id", auth, adminAuth, uploadCtrl.deleteImg);
