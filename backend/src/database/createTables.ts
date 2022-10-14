import { pool } from "./connection";

export const createTables = () => {
  pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            provider VARCHAR(100) NOT NULL,
            providerId VARCHAR(100) NOT NULL,
            username VARCHAR(100) NOT NULL UNIQUE,
            email VARCHAR(100) NOT NULL UNIQUE
        )
    `);
};
