var mysql = require('mysql'),
    connection = mysql.createConnection({
       host    : 'localhost',
       user    : 'root',
       password: 'root'
    });

connection.connect();

connection.query('use test_sql');
var query = 'select * from Test_SQL';

connection.query(query, function (err, rows, fields) {
   if (err) throw err;

   console.log(rows);
});

connection.end();
