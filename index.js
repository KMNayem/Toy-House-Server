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

async function run(){
    try{
        await client.connect();
        const productCollection = client.db('toyHouse').collection('product');

        app.get('/product', async (req, res) => {
            const query = {};
            const cursor = productCollection.find(query);
            const product = await cursor.toArray();
            res.send(product);
        })
    }
    finally{

    }
}

run().catch(console.dir);

  
app.get('/', (req, res) =>{

    res.send('Running Toy store');
});

app.listen(port, () =>{
    console.log('listening to port', port); 
});