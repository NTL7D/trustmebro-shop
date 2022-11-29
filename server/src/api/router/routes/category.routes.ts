import express from "express";
import cateCtrl from "../../controller/cateCtrl";
import auth from "../../middleware/auth";
import adminAuth from "../../middleware/admin";
const cateRouter = express.Router();
cateRouter
    .route("/")
    .get(cateCtrl.allCate)
    .post(auth, adminAuth, cateCtrl.createCate);
cateRouter
    .route("/:id")
    .get(cateCtrl.getById)
    .put(auth, adminAuth, cateCtrl.updateCate)
    .delete(auth, adminAuth, cateCtrl.deleteCate);
export default cateRouter;
