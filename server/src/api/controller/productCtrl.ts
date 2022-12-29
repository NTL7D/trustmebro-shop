import { Request, Response } from "express";
import { Prisma } from "@prisma/client";
import prisma from "../libs/prisma";

const productCtrl = {
    getProduct: async (req: Request, res: Response) => {
        const { name, skip, take, orderBy } = req.query;
        try {
            const productName: Prisma.productsWhereInput = name
                ? {
                      OR: [
                          {
                              name: { contains: String(name) },
                          },
                      ],
                  }
                : {};
            const getProduct = await prisma.products.findMany({
                take: Number(take) || undefined,
                skip: Number(skip) || undefined,
                where: {
                    ...productName,
                },
                include: {
                    image: true,
                    category: true,
                },
                orderBy: {
                    //asc or desc only
                    updatedAt: orderBy as Prisma.SortOrder,
                },
            });
            res.json(getProduct);
        } catch (err: any) {
            res.status(500).json({
                msg: err.message,
            });
        }
    },
    getById: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const findProduct = await prisma.products.findUnique({
                where: {
                    id: Number(id),
                },
                include: {
                    image: true,
                    category: true,
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
        const { name, desc, price, category, image } = req.body;
        try {
            if (!image) {
                return res.status(400).json({ msg: "no image uploaded" });
            }

            const find = await prisma.products.findUnique({
                where: {
                    name: String(name),
                },
            });
            if (find) {
                return res.status(400).json({
                    msg: "Product have been created",
                });
            }

            const createProduct = await prisma.products.create({
                data: {
                    name: String(name),
                    desc: String(desc),
                    price: Number(price),
                    category: {
                        connect: {
                            name: String(category),
                        },
                    },
                    image: {
                        connect: {
                            url: String(image),
                        },
                    },
                },
            });

            res.json({ createProduct });
        } catch (err: any) {}
    },
    updateProduct: async (req: Request, res: Response) => {
        const id = req.params.id;
        const { name, desc, price, category, image } = req.body;
        try {
            const updateProduct = await prisma.products.update({
                where: {
                    id: Number(id),
                },
                data: {
                    name: String(name),
                    desc: String(desc),
                    price: Number(price),
                    category: {
                        connect: {
                            name: String(category),
                        },
                    },
                    image: {
                        connect: {
                            url: String(image),
                        },
                    },
                },
            });

            res.json({ updateProduct });
        } catch (err: any) {
            res.status(500).json({
                msg: err.message,
            });
        }
    },
    deleteProduct: async (req: Request, res: Response) => {
        const id = req.params.id;
        try {
            const deleteProduct = await prisma.products.delete({
                where: {
                    id: Number(id),
                },
            });

            res.json("deleted");
        } catch (err: any) {
            res.status(500).json({
                msg: err.message,
            });
        }
    },
};

export default productCtrl;
