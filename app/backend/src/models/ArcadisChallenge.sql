DROP SCHEMA IF EXISTS ArcadisChallenge;

CREATE SCHEMA IF NOT EXISTS ArcadisChallenge;

USE ArcadisChallenge;

CREATE TABLE samplePoints (
    name VARCHAR(30) NOT NULL PRIMARY KEY,
    x_coordinate FLOAT NOT NULL,
    y_coordinate FLOAT NOT NULL
);

CREATE TABLE sampleParameters (
	samplePointName VARCHAR(30) NOT NULL,
    parameter VARCHAR(30) NOT NULL,
    parameterUnity VARCHAR(30) NOT NULL,
    parameterValue FLOAT NOT NULL,
    samplingDate DATE NOT NULL,
    foreign key (samplePointName) REFERENCES samplePoints(name)
);

INSERT INTO samplePoints (name, x_coordinate, y_coordinate) VALUES
	('ponto 1', 70.54, -40.24),
    ('ponto 2', 40.35, -50.74);

INSERT INTO sampleParameters (samplePointName, parameter, parameterUnity, parameterValue, samplingDate) VALUES
	('ponto 1', 'cadmio total', 'mg/l', 0.1, '2011-08-22'),
    ('ponto 1', 'cromo total', 'mg/l', 0.1, '2011-08-21'),
    ('ponto 2', 'arsenio total', 'mg/l', 0.001, '2022-07-12');
    