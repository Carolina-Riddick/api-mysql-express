import {config} from "dotenv";

config();

export default {
    host : process.env.HOST || "no anda el host",
    user: process.env.USER || "no anda el user",
    database: process.env.DATABASE || "no anda la database",
    password: process.env.PASSWORD || "no anda psw"
}