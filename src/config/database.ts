import "dotenv/config";

export const dbConfig = {
    db: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    host: process.env.DB_HOST
}