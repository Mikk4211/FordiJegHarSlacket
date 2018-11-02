var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  // Hvis man lader find() være tom vil det have samme effekt som SELECT * har i MySQL.
  // Her vil den da finde alle customers og den info, man har indstastet om dem fra tidligere filer.
  // toArray indsætter dem derefter i et array.
  dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});