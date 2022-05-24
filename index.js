const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// username: dbtoys
// password: PlLATtMSkgl1JxrQ


app.use(cors());
app.use(express.json());




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zwrzt.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('dbtoys connected');
  // perform actions on the collection object
  client.close();
});


  
app.get('/', (req, res) =>{

    res.send('Running Toy store');
});

app.listen(port, () =>{
    console.log('listening to port', port); 
});