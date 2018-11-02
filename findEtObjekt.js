var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  // findOne() finder et objekt i en collection, ligesom SELECT ville i MySQL.
  // Metoden indtager først et query objekt, og derefter en anonym funktion(callback), som parametre.
  // Metoden læser først alle elementer af collectionen, men returnerer kun det første. 
  dbo.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});