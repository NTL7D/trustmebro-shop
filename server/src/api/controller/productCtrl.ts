import { Request, Response } from "express";
import { Prisma } from "@prisma/client";
import prisma from "../libs/prisma";
import path from "path";
import fs from "fs-extra";

const productCtrl = {
    getProduct: async (req: Request, res: Response) => {
        const { name, price, skip, take, orderBy } = req.query;
        try {
            const productName: Prisma.ProductWhereInput = name
                ? {
                      OR: [
                          {
                              name: { contains: String(name) },
                          },
                      ],
                  }
                : {};
            const priceCompare: Prisma.ProductWhereInput = price
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
            const findProduct = await prisma.product.findMany({
                take: Number(take) || undefined,
                skip: Number(skip) || undefined,
                where: {
                    ...productName,
                    ...priceCompare,
                },
                orderBy: {
                    updatedAt: orderBy as Prisma.SortOrder,
                },
            });
            res.json(findProduct);
        } catch (err: any) {
            res.status(500).json({
                msg: err.message,
            });
        }
    },
    createProduct: async (req: Request, res: Response) => {
        const { name, desc, price, cate } = req.body;
        const img = req.file;
        try {
            const findProduct = await prisma.product.findUnique({
                where: {
                    name: String(name),
                },
            });
            if (findProduct) {
                return res.status(400).json({
                    msg: "Product have already been created",
                });
            }
            const createProduct = await prisma.product.create({
                data: {
                    name: String(name),
                    desc: String(desc),
                    price: Number(price),
                    image: String(img?.path),
                    Category: {
                        connect: {
                            name: String(cate),
                        },
                    },
                },
            });
            res.json(createProduct);
        } catch (err: any) {
            res.status(500).json({
                msg: err.message,
            });
        }
    },
    updateProduct: async (req: Request, res: Response) => {
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
            const newProduct = await prisma.product.update({
                where: {
                    id: Number(id),
                },
                data: {
                    name: String(name),
                    desc: String(desc),
                    price: Number(price),
                    image: String(img?.path),
                    Category: {
                        connect: {
                            name: String(cate),
                        },
                    },
                },
            });

            res.json(newProduct);
        } catch (err: any) {
            res.status(500).json({
                msg: err.message,
            });
        }
    },
    deleteProduct: async (req: Request, res: Response) => {
        const id = req.params.id;
        try {
            const find = await prisma.product.findUnique({
                where: {
                    id: Number(id),
                },
            });
            // check if file exist => delete it
            if (find) {
                const exist = await fs.pathExists(path.resolve(find.image));
                if (exist) {
                    await fs.unlink(path.resolve(find.image));
                }
            }
            const deleteProduct = await prisma.product.delete({
                where: {
                    id: Number(id),
                },
            });
            res.json({ msg: "deleted" });
        } catch (err: any) {
            res.status(500).json({ msg: err.message });
        }
    },
};

export default productCtrl;
