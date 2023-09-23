const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require("express");
const cors = require('cors');
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.REACT_MONGO_USER}:${process.env.REACT_MONGO_PASS}@cluster0.iohfkju.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        const usersCollection = client.db('user-project').collection("users");
        app.get('/users', async (req, res) => {

            const query = {};
            const user = await usersCollection.find(query).toArray();
            res.send(user);
        })
        app.get('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const service = await usersCollection.findOne(query);
            res.send(service);
        });
    }
    finally {


    }
}
run().catch(err => console.log(err))

app.get("/", (req, res) => {
    res.send("News API Running")
})

app.listen(port, () => {
    console.log("News API Running")
})


