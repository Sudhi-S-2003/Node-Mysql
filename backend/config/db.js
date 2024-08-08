import mysql from 'mysql2';
import dotenv from 'dotenv'
dotenv.config()
const password=process.env.MYSQL_PASSWORD;
const database=process.env.MYSQL_DB;
const user=process.env.MYSQL_USER;
const host=process.env.MYSQL_HOST;
var connection = mysql.createConnection({
    host     : host,
    user     : user,
    password : password,
    database : database,
   
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

export default connection;
