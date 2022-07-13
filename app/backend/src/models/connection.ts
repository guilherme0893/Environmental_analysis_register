import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

// const connection = mysql.createPool({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.DB_NAME,
// });

const connection = mysql.createPool({
  host: 'us-cdbr-east-06.cleardb.net',
  user: 'b1d63bc38b3f05',
  password: 'abb9ddb0',
  database: 'heroku_c9ebd72cd26fe3e',
});

export default connection;

// mysql://b1d63bc38b3f05:abb9ddb0@us-cdbr-east-06.cleardb.net/heroku_c9ebd72cd26fe3e?reconnect=true
