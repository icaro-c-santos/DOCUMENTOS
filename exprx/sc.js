const  mongoose  =  require ( 'mongoose' ) ;

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://teste:1234@ics.otxp6.mongodb.net/teste?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

function conexao(){
  return client.connect();
}
conexao();
