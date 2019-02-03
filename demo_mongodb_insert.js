var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var imie = "Mykhailo";
var Nazwisko = "Shtefanitsa";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("nodeJS");
    var myobj = { name: imie, address: 'Fredry 27/8', suename: Nazwisko  };
    dbo.collection("customers").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
});