const { Pool } = require('pg');

const pool = new Pool({
  host: '127.0.0.1',
    user: 'postgres',
    port: 5432,
    password: 'mariferjr1',
    database: 'stockrush',
  });
  pool.connect();


  pool.query("SELECT * FROM users", (err, res) => {
    if (!err){
      console.log(res.rows);
    } else {
     console.log(err.message);
    }
    pool.end;
  });

  module.exports = pool;
