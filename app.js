const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// connection
const url = 'mongodb://localhost:27017';

// db name
const dbName = 'binarysearch';

// create new MongoClient
const client = new MongoClient(url);

// use connect method to connect to the server
client.connect(function(err){
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    client.close();
});

const addBottles = function(db, callback){
    // get bottles collection
    const collection = db.collection('bottles');
    // insert some bottles
    collection.insertMany([
        {id: 1},
        {id: 2},
        {id: 3}
    ], function(err, result){
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
}