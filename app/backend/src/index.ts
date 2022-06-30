import express from 'express';
require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;
