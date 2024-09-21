var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789",
  database:"mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE user (name VARCHAR(255), address VARCHAR(255))";                                        
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});