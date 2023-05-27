import * as dotenv from 'dotenv';
import app from './app';

dotenv.config({ path: `${__dirname}/.env` });

const port = process.env.LOCAL_PORT || 4001;

app.listen(port, () => console.log(
  `Server is running on PORT: ${port}!`,
));
