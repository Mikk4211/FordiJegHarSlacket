var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Sowstreet 4'},
    { name: 'Amy', address: 'Park Lane 38'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'John', address: 'Highway 71'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Viola', address: 'Sideway 1633'},
    { name: 'William', address: 'Central st 954'}
  ];
  // Forskellen mellem insertOne og insertMany ligger lidt i navnet.
  // Den ene kan kun indsætte en, mens den anden kan indsætte flere ting til en collection. 
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});