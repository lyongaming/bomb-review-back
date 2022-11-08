CREATE DATABASE "bomb_review";

CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(50) UNIQUE NOT NULL,
    user_pass VARCHAR(50) NOT NULL,
    user_email VARCHAR(255) UNIQUE NOT NULL,
    user_img VARCHAR(255)
);