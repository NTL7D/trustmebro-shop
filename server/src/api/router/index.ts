import { Router } from "express";
import { router as auth } from "./routes/auth.routes";
import { router as category } from "./routes/category.routes";
import { router as product } from "./routes/product.routes";
import { router as image } from "./routes/upload.routes";
import { router as cart } from "./routes/cart.routes";

const router = Router();

router.use("/auth", auth);
router.use("/category", category);
router.use("/products", product);
router.use("/image", image);
router.use("/cart", cart);

export default router;
