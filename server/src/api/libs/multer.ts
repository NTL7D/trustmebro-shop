import { Request } from "express";
import multer, { FileFilterCallback } from "multer";
type DestinationCallback = (err: Error | null, destination: string) => void;
type FilenameCallback = (err: Error | null, filename: string) => void;

export const productStorage = multer.diskStorage({
    destination: (
        req: Request,
        file: Express.Multer.File,
        callback: DestinationCallback
    ): void => {
        callback(null, "images");
    },
    filename: (
        req: Request,
        file: Express.Multer.File,
        callback: FilenameCallback
    ): void => {
        callback(null, `${Date.now()}-${file.originalname}`);
    },
});

export const filter = (
    req: Request,
    file: Express.Multer.File,
    callback: FileFilterCallback
): void => {
    if (
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png"
    ) {
        callback(null, true);
    } else {
        callback(null, false);
    }
};
