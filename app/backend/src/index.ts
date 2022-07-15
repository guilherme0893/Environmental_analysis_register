import 'dotenv/config';
import app from './app';

// const { PORT } = process.env;

const port = process.env.PORT || process.env.LOCAL_PORT;

app.listen(port, () => console.log(
  `Server is running on PORT: ${port}!`,
));
