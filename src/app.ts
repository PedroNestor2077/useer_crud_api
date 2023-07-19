import express from "express";
import router from "./config/routes";
import { configDotenv } from "dotenv";

const server = express();
server.use(express.json());
server.use(router);
configDotenv();

export default server;
