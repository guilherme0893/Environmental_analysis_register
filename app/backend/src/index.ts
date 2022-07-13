import 'dotenv/config';
import app from './app';

const { PORT } = process.env;

const port = PORT || 3001;

app.listen(port, () => console.log(
  `Server is running on PORT: ${port}!`,
));
