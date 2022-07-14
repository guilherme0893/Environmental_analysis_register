# Arcadis Challenge

Welcome to the Arcadis Challenge repository, here is registed all steps taken by the author during the technical challenge provided by Arcadis

# The problem and its solution

In many environmental studies, it is necessary to sample data throughout the study area during different time periods in order to analyze water quality, for example, and potential pollution impacts. It is also very common the collected data to be large, what makes harder to deal with it. Having that in mind, this application provides a solution; the goal is to create an application -- which is desing to work both on mobile devices or desktop via web -- where the user is able to register samples, initially by adding their name, X and Y coordinates. Then, whether the sample has any measured parameter, it is possible to register it; here the parameters is composed o measured parameter name, its value, the unity used and the sampling date. A way of visualizing data was also created, so one user is able to retrieve all samples or a single sample, all parametrs or a single parameters, and all data registered and all data that is above a limit provided by COPAM/CERH-MG nº 01 - 2008 Água Doce - Classe 2 legislation for fresh water.

In summary, it is possible to:

- Register samples
- Register parameters
- Search for sample
- Search for parameters
- Filter the parameters above the legislation
- List all parameters and their related samples

# How to use

This application is free to be accessed. The React-based frontend is hosted on Vercel, and can be accessed here:

  https://arcadis-challenge-front.vercel.app/
 
For the backend and database, the API is hosted on Heroku; the database is also hosted there, using the add-on ClearDB in the free version. To access:

  https://arcadis-backend.herokuapp.com/

# How to install and use it locally

# Backend

The following project can be used locally. <b>Make sure you have installed both NodeJS and MySQL locally!</b>

  1) Clone this repository by <code>git clone git@github.com:guilherme0893/Arcadis_Challenge.git</code> and enter the folder

  2) Go to the backend by folder running <code>cd app/backend</code> and inside of it <code>npm install</code> to install dependencies

  3) Attention that to run locally the backend
  
    3.1) In this project, the backend port is setted as 3004, so make sure no application is running on this port
    
    3.2) If you have any application running on port 3004, it is possible to change the port in the index.ts file
    
  4) To run the application locally <code>npm run dev</code>
  
# Inserting and retreiving data

The API is setted so it is possible to access samplePoints, sampleParameters and completeData/overlimitData. To get data related to such endpoint, the method GET is used as it follows for each example.
```
samplePoints

1) getAll: /samples
2) getByName: /samples/:searchedSample

sampleParameters

1) getAll: /parameters
2) getByName: /parameters/:parameter

completeData

1) getAll: /completeData
2) getAll: /overlimitData
```

To insert data related to each endpoint, the method POST is used as it follows for each example.
```
samplePoints

1) create: /samples

{
  "name": string,
  "xCoordinate": number,
  "yCoordinate": number,
}
```
```
sampleParameters

1) create: /parameters

{
  "samplePointName": string,
  "parameter": number,
  "parameterUnity": string,
  "parameterValue": number,
  "samplingDate": Date | string
}
```
# Frontend

The frontend is setted to consume data supported by Axios. In the requisitions (get and post), two url are provided to fetch data, as the given example:
('https://arcadis-backend.herokuapp.com/parameters' || 'http://localhost:3004/parameters'). With this, it is possible to fetch data, whether it is hosted on Heroku or directly from the used machine.  

  1) Clone this repository by <code>git clone</code> and enter the folder

  2) Go to the front by folder running <code>cd app/front</code> and inside of it <code>npm install</code> to install dependencies
  
  3) To run the application locally <code>npm start</code>
  
 # Tests
 
 This application is provided with tests, especially for the backend. In order to run the tests, it is required to have some data in the database. To run all backend tests, browse to the backend folder -- considering you are in the app -- by <code> cd backend</code> the tests <code>npm test</code>. To run the tests coverage, inside the backend folder, run <code>npm run test:coverage</code>. Please, notice that unfortunately some tests are failing due to exceed number of access in the Heroku hosted database, and generating a timeout error. 

# Project Structure

Here lies all information related to the whole project folder structure and associated files

```
project/
├─ README.md
├─ app/
│  ├─ backend/
│  │  ├─ src/
│  │  │  ├─ __tests__/
│  │  │  │  ├─ integration/
│  │  │  │  │  ├─ completeData/
│  │  │  │  │  │  ├─ getAll.test.ts
│  │  │  │  │  │  ├─ getOverLimit.test.ts
│  │  │  │  │  ├─ sampleParameters/
│  │  │  │  │  │  ├─ create.test.ts
│  │  │  │  │  │  ├─ getByName.test.ts
│  │  │  │  │  │  ├─ getAll.test.ts
│  │  │  │  │  ├─ samplePoints/
│  │  │  │  │  │  ├─ create.test.ts
│  │  │  │  │  │  ├─ getAll.test.ts
│  │  │  │  │  │  ├─ getByName.test.ts
│  │  │  │  ├─ mocks/
│  │  │  │  │  ├─ completeData/
│  │  │  │  │  │  ├─ completeDataMock.ts
│  │  │  │  │  ├─ sampleParameters/
│  │  │  │  │  │  ├─ sampleParametersMock.ts
│  │  │  │  │  ├─ samplePoints/
│  │  │  │  │  │  ├─ samplePointsMock.ts
│  │  │  ├─ controllers/
│  │  │  │  ├─ completeData.ts
│  │  │  │  ├─ sampleParameters.ts
│  │  │  │  ├─ samplePoints.ts
│  │  │  ├─ interfaces/
│  │  │  │  ├─ ICompleteData.ts
│  │  │  │  ├─ ISample.ts
│  │  │  │  ├─ ISampleParameters.ts
│  │  │  ├─ middlewares/
│  │  │  │  ├─ sampleParameters.ts
│  │  │  │  ├─ samplePoints.ts
│  │  │  ├─ routes/
│  │  │  │  ├─ completeData.ts
│  │  │  │  ├─ sampleParameters.ts
│  │  │  │  ├─ samplePoints.ts
│  │  │  ├─ app.ts
│  │  │  ├─ index.ts
│  │  │  ├─ models/
│  │  │  │  ├─ completeData.ts
│  │  │  │  ├─ sampleParameters.ts
│  │  │  │  ├─ samplePoints.ts
│  │  │  │  ├─ ArcadisChallenge.sql
│  │  │  │  ├─ connection.ts
│  │  │  │  ├─ recreateDB.ts
│  │  │  ├─ services/
│  │  │  │  ├─ completeData.ts
│  │  │  │  ├─ sampleParameters.ts
│  │  │  │  ├─ samplePoints.ts
│  │  ├─ tsconfig.json
│  │  ├─ package.json
│  │  ├─ package-lock.jsoon
│  │  ├─ .dockerignore
│  │  ├─ .env
│  │  ├─ .eslintignore
│  │  ├─ jest.config.js
│  │  ├─ .eslintrc.json
│  │  ├─ DockerFile
│  ├─ frontend/
│  │  ├─ .dockerignore
│  │  ├─ .env
│  │  ├─ DockerFile
│  │  ├─ .gitignore
│  │  ├─ README.MD
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ public/
│  │  │  ├─ favicon.ico
│  │  │  ├─ index.html
│  │  │  ├─ robots.txt
│  │  ├─ src/
│  │  │  ├─ App.js
│  │  │  ├─ index.js
│  │  │  ├─ renderWithRouter.js
│  │  │  ├─ __tests__/
│  │  │  ├─ components/
│  │  │  ├─ context/
│  │  │  ├─ images/
│  │  │  ├─ pages/
│  │  │  ├─ routes/
│  │  │  ├─ index.css
│  │  │  ├─ index.js
``` 
