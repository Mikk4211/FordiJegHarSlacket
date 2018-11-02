var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  // Det 2. parameter som find() indtager er optional, men det er hvilke fields man ønsker at finde.
  // Fra før kan den finde det hele, hvis man lader den være tom. 
  // Denne parameter er en boolean, så den opererer ud fra om du har tastet 0 eller 1 ud fra de parametre du ønsker at finde. 
  dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    // Det der bliver printet, kan ændres hvis du indsætter [x].y, eks [2].adress, for at finde adressen for det element i arrayet
    // som du har indtastet, i dette tilfælde det element der har pladsen [2].
    console.log(result);
    db.close();
  });
});