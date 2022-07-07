DROP DATABASE IF EXISTS ArcadisChallenge;

CREATE DATABASE ArcadisChallenge;

USE ArcadisChallenge;

CREATE TABLE ArcadisChallenge.samplePoints (
	id INT NOT NULL auto_increment,
    name VARCHAR(30) NOT NULL,
    x_coordinate FLOAT NOT NULL,
    y_coordinate FLOAT NOT NULL,
    PRIMARY KEY(id)
) ENGINE = INNODB;

CREATE TABLE ArcadisChallenge.sampleParameters (
	id INT NOT NULL auto_increment,
	samplePointName VARCHAR(30)  NOT NULL,
    parameter VARCHAR(30) NOT NULL,
    parameterUnity VARCHAR(30) NOT NULL,
    parameterValue FLOAT NOT NULL,
    PRIMARY KEY(id)
) ENGINE = INNODB;

INSERT INTO ArcadisChallenge.samplePoints (id, name, x_coordinate, y_coordinate) VALUES
	(1, 'ponto 1', 70.54, -40.24),
    (2, 'ponto 2', 40.35, -50.74);

INSERT INTO ArcadisChallenge.sampleParameters (id, samplePointName, parameter, parameterUnity, parameterValue) VALUES
	(1, 'ponto 1', 'cadmio', 'mg/l', 0.1),
    (2, 'ponto 1', 'cromo', 'mg/l', 0.1),
    (3, 'ponto 2', 'niquel', 'mg/l', 0.01);
