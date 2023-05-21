SHOW DATABASES;
DROP DATABASE IF EXISTS TasksList;
CREATE DATABASE TasksList;
USE TasksList;

DROP TABLE IF EXISTS Trash;
DROP TABLE IF EXISTS Task ;
DROP TABLE IF EXISTS USER;

CREATE TABLE IF NOT EXISTS USER(
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    user_nickname VARCHAR(64) NOT NULL UNIQUE,
    user_email VARCHAR(64) NOT NULL UNIQUE,
    user_password VARCHAR(64) NOT NULL,

    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
 
);
 

CREATE TABLE IF NOT EXISTS Task (
   Task_ID INT PRIMARY KEY AUTO_INCREMENT,
   Task_Body VARCHAR(1024) NOT NULL,
   user_id INT NOT NULL,
   FOREIGN KEY (user_id) REFERENCES USER(user_id)
);

CREATE TABLE IF NOT EXISTS Trash (
    Task_ID INT PRIMARY KEY AUTO_INCREMENT,
    Task_Body VARCHAR(1024) NOT NULL,
    user_id INT NOT NULL,
   FOREIGN KEY (user_id) REFERENCES USER(user_id)
  
);



 