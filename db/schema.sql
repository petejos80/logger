CREATE DATABASE IF NOT EXISTS logger_db;
USE logger_db;

CREATE TABLE logger (
	id int NOT NULL AUTO_INCREMENT,
    logger_name varchar(255) NOT NULL,
    completed BOOL DEFAULT false,
    PRIMARY KEY (id)
);