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
    var sql = "INSERT into customers (name, adress) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");    
    });
});
