import mysql from 'mysql2/promise';

import { DB_HOST, DB_NAME, DB_USER, DB_PWD } from '../config/config.js';

const POOL = mysql.createPool({
    host: DB_HOST,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PWD,
});

POOL.getConnection()
    .then(res => console.log(`Connected succesfull to ${res.config.database}`))
    .catch(err => console.log(err));

export default POOL;