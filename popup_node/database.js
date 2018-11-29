var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'NEWPASSWORD',
  database : 'popup'
});
connection.connect();

connection.query('SELECT * FROM admins', function(err, rows, fields) 
{
  if (err) throw err;
  

  console.log(rows[5]);
});

connection.end();

