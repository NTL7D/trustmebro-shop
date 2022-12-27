import { Request, Response } from "express";
import prisma from "../libs/prisma";

const orderCtrl = {
    getCart: async (req: Request, res: Response) => {
        const id = req.params.id;
        try {
            const find = await prisma.cart.findMany({
                where: {
                    userId: Number(id),
                },
                include: {
                    Order: true,
                },
            });
            res.json(find);
        } catch (err: any) {
            res.status(500).json({ msg: err.message });
        }
    },
    getCartById: async (req: Request, res: Response) => {
        const { cartId, userId } = req.params;
        try {
            const findOrder = await prisma.cart.findUnique({
                where: {
                    id: Number(cartId),
                    userId: Number(userId),
                },
                include: {
                    Order: true,
                },
            });

            res.json(findOrder);
        } catch (err: any) {
            res.status(500).json({ msg: err.message });
        }
    },
};

export default orderCtrl;
