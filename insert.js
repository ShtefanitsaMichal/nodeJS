var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    port: '8889',
    user: 'root',
    password: 'root',
    database: 'my_nodejs'
});

con.connect(function (err) {
    if (err) throw err;
    var sql = "INSERT INTO customers (name, adress) VALUES ('Michelle', 'Blue Village 1')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted, ID: " + result.insertId);    
    });
});
