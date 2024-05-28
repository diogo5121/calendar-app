import dotenv from 'dotenv';
import { Options } from 'sequelize';
dotenv.config();

export const config: Options = {
    define: {
        charset: "utf8mb4",
        collate: "utf8mb4_bin"
    },
    dialect: "postgres",
    timezone: "-03:00",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME || "postgres",
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000
    }

};