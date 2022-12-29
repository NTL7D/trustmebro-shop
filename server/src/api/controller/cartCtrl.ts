import { Request, Response } from "express";
import prisma from "../libs/prisma";

const cartCtrl = {
    addCart: async (req: Request, res: Response) => {
        const { order } = req.body.cart;
        try {
            const findCart = await prisma.cart.findUnique({
                where: {
                    userId: Number(req.user.id),
                },
            });

            if (!findCart) {
                const createCart = await prisma.cart.create({
                    data: {
                        user: {
                            connect: {
                                id: Number(req.user.id),
                            },
                        },
                        item: {
                            create: {
                                product: {
                                    connect: {
                                        name: String(order.name),
                                    },
                                },
                                quantity: Number(order.quantity),
                                price: Number(order.price),
                            },
                        },
                    },
                });
                res.json({ createCart });
            } else {
                const updateCart = await prisma.cart.update({
                    where: {
                        id: Number(findCart.id),
                    },
                    data: {
                        user: {
                            connect: {
                                id: Number(req.user.id),
                            },
                        },
                        item: {
                            create: {
                                product: {
                                    connect: {
                                        name: String(order.name),
                                    },
                                },
                                quantity: Number(order.quantity),
                                price: Number(order.price),
                            },
                        },
                    },
                });
                res.json({ updateCart });
            }
        } catch (err: any) {
            res.status(500).json({
                msg: err.message,
            });
        }
    },
};

export default cartCtrl;
