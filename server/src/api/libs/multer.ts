import { Request } from "express";
import path from "path";
import multer, { FileFilterCallback } from "multer";

type DestinationCallback = (err: Error | null, destination: string) => void;
type FilenameCallback = (err: Error | null, filename: string) => void;

const productStorage = multer.diskStorage({
    destination: (
        req: Request,
        file: Express.Multer.File,
        cb: DestinationCallback
    ): void => {
        cb(null, "./public/upload");
    },
    filename: (
        req: Request,
        file: Express.Multer.File,
        cb: FilenameCallback
    ): void => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const fileFilter = (
    req: Request,
    file: Express.Multer.File,
    cb: FileFilterCallback
): void => {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(
        path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(Error("Alert: Image Only"));
    }
};

const upload = multer({
    storage: productStorage,
    limits: { fileSize: 8 * 1024 * 1024 },
    fileFilter: fileFilter,
});

export { upload };
