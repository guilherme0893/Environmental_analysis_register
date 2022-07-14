# Arcadis_Challenge

Welcome to the Arcadis Challenge repository, here is registed all steps taken by the author during the technical challenge provided by Arcadis

# Goal

Here the goal was to create an application where the user could initially register samples by adding their name, X and Y coordinates. Then, it would also be possible to add parameters related to a given sample; such parameters are: the parameter name itself, the value, the unity used and the sampling date.

# Project Structure
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
