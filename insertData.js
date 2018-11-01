var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  // Laver en variabel til 
  var dbo = db.db("mydb");
  var myobj = { name: "Jens Hansen", address: "Bondegård" };
  // Indsætter data ind i en connection. 
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("Noget data er indsat");
    db.close();
  });
});
