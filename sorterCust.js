var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  // Denne variabel definere, ud fra .sort metoden, som indtager en parameter, som er hvilken ting, man ønsker at sortere ud fra.
  // Det er en ikke boolean, ligesom en af de andre metoder, så hvis man ændrer name: 1, til name: 0 her, vil der komme en error.
  var mysort = { address: 1 };
  dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});