"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../libs/prisma"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const productCtrl = {
    getProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, price, skip, take, orderBy } = req.query;
        try {
            const productName = name
                ? {
                    OR: [
                        {
                            name: { contains: String(name) },
                        },
                    ],
                }
                : {};
            const priceCompare = price
                ? {
                    OR: [
                        { price: { equals: Number(price) } },
                        { price: { gte: Number(price) } },
                        { price: { gt: Number(price) } },
                        { price: { lte: Number(price) } },
                        { price: { lt: Number(price) } },
                    ],
                }
                : {};
            const findProduct = yield prisma_1.default.product.findMany({
                take: Number(take) || undefined,
                skip: Number(skip) || undefined,
                where: Object.assign(Object.assign({}, productName), priceCompare),
                orderBy: {
                    updatedAt: orderBy,
                },
            });
            res.json(findProduct);
        }
        catch (err) {
            res.status(500).json({
                msg: err.message,
            });
        }
    }),
    createProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, desc, price, cate } = req.body;
        const img = req.file;
        try {
            const findProduct = yield prisma_1.default.product.findUnique({
                where: {
                    name: String(name),
                },
            });
            if (findProduct) {
                return res.status(400).json({
                    msg: "Product have already been created",
                });
            }
            const createProduct = yield prisma_1.default.product.create({
                data: {
                    name: String(name),
                    desc: String(desc),
                    price: Number(price),
                    image: String(img === null || img === void 0 ? void 0 : img.path),
                    Category: {
                        connect: {
                            name: String(cate),
                        },
                    },
                },
            });
            res.json(createProduct);
        }
        catch (err) {
            res.status(500).json({
                msg: err.message,
            });
        }
    }),
    updateProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = req.params.id;
        const { name, desc, price, cate } = req.body;
        const img = req.file;
        try {
            // const oldProduct = await prisma.product.findUnique({
            //     where: {
            //         id: Number(id),
            //     },
            // });
            // if (oldProduct) {
            //     const exist = await fs.pathExists(
            //         path.resolve(oldProduct.image)
            //     );
            //     if (exist) {
            //         await fs.unlink(path.resolve(oldProduct.image));
            //     }
            // }
            const newProduct = yield prisma_1.default.product.update({
                where: {
                    id: Number(id),
                },
                data: {
                    name: String(name),
                    desc: String(desc),
                    price: Number(price),
                    image: String(img === null || img === void 0 ? void 0 : img.path),
                    Category: {
                        connect: {
                            name: String(cate),
                        },
                    },
                },
            });
            res.json(newProduct);
        }
        catch (err) {
            res.status(500).json({
                msg: err.message,
            });
        }
    }),
    deleteProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = req.params.id;
        try {
            const find = yield prisma_1.default.product.findUnique({
                where: {
                    id: Number(id),
                },
            });
            // check if file exist => delete it
            if (find) {
                const exist = yield fs_extra_1.default.pathExists(path_1.default.resolve(find.image));
                if (exist) {
                    yield fs_extra_1.default.unlink(path_1.default.resolve(find.image));
                }
            }
            const deleteProduct = yield prisma_1.default.product.delete({
                where: {
                    id: Number(id),
                },
            });
            res.json({ msg: "deleted" });
        }
        catch (err) {
            res.status(500).json({ msg: err.message });
        }
    }),
};
exports.default = productCtrl;
