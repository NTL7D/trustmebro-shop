import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./api/router";
import { config } from "dotenv";

const main = async () => {
    config();
    const app = express();
    const port = process.env.PORT || 5001;
    //middleware
    app.use(cors());
    app.use(cookieParser());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    //router
    app.use("/api", router);
    //start
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
};
main().catch((err) => {
    console.log(err);
});
