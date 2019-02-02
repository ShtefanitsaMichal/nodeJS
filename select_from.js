var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    port: '8889',
    user: 'root',
    password: 'root',
    database: 'my_nodejs'
});

con.connect(function (err) {
    if (err) throw err;
    con.query("Select id, name, adress FROM customers", function (err,result,fields) {
        if (err) throw err;
        console.log(fields[1].db);
    });
});

