import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"rootpass",
    database:"blog"
})


//DB script

/* 
    CREATE TABLE users(
        `id` INT PRIMARY KEY,
        `username` VARCHAR(45),
        `email` VARCHAR(255),
        `password` VARCHAR(255),
        `img` VARCHAR(255)
    );

    CREATE TABLE posts(
        `id` INT PRIMARY KEY NOT NULL,
        `title` VARCHAR(255) NOT NULL,
        `desc` VARCHAR(1000) NOT NULL,
        `img` VARCHAR(255) NOT NULL,
        `date` DATETIME NOT NULL,
        `userid` INT NOT NULL,
        `category` VARCHAR(45) NOT NULL,
        FOREIGN KEY (userid) REFERENCES users(id) 
    );

    
 */