var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { address: "Park Lane 38" };
  // Der er her lavet et query objekt, hvor der er indtastet noget data i.
  // Her givet vi så find() et specifikt object den vil kigge efter, som så her
  // kun vil kigge efter documents, og objekter som har adressen Park Lane 38. 
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});