import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandle.js';
import router from './routers/index.js';
dotenv.config();
var PORT = process.env.PORT;
var app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);
app.listen(PORT, function () {
    console.log("Estou rodando na porta = " + PORT);
});
