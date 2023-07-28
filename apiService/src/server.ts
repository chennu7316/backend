import express from "express";
import { connectToDatabase } from "./services/database.service"
import { carsRouter } from "./routes/cars.router";
import * as dotenv from 'dotenv';
dotenv.config()
const port = process.env.PORT
const app= express();
// eslint-disable-next-line 
connectToDatabase()
    .then(() => {
        app.use("/", carsRouter);

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });