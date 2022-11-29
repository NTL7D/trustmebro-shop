import { Router } from "express";
import authRouter from "./routes/auth.routes";
import cateRouter from "./routes/category.routes";
import productRouter from "./routes/product.routes";
const router = Router();

router.use("/auth", authRouter);
router.use("/category", cateRouter);
router.use("/product", productRouter);

export default router;
