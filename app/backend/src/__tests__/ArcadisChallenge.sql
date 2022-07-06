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
	samplePointsId INT NOT NULL,
    parameter VARCHAR(30) NOT NULL,
    parameterUnity VARCHAR(30) NOT NULL,
    parameterValue FLOAT NOT NULL,
    FOREIGN KEY (samplePointsId)
		REFERENCES samplePoints(id),
    PRIMARY KEY(id)
) ENGINE = INNODB;
