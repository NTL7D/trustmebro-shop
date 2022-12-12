import { Router } from "express";
import { router as auth } from "./routes/auth.routes";
import { router as category } from "./routes/category.routes";
import { router as product } from "./routes/product.routes";
import { router as upload } from "./routes/upload.routes";
const router = Router();

router.use("/auth", auth);
router.use("/category", category);
router.use("/product", product);
router.use("/upload", upload);

export default router;
