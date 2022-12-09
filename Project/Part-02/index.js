const express = require("express")
const mongo = require("mongodb").MongoClient
const app = express()
const url = "mongodb://localhost:27017"
const ObjectId = require('mongodb').ObjectId;
let db

mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error(err)
      return
    }
    db = client.db("ProductCatalog")
    products = db.collection("products")
  }
)
app.use(express.json())

//Return a JSON object containing all the products in the database
app.get("/Products", (req, res) => {
    products.find().toArray((err, items) => {
        if (err) {
            console.error(err)
            res.status(500).json({ err: err })
            return
        }
        res.status(200).json({ 
            products: items 
        })
    })
})

//Return a JSON object containing the IDs of all the products in the database
app.get("/Products/Identifiers", (req, res) => {
    products.find().project({"_id":1}).toArray((err, items) => {
        if (err) {
            console.error(err)
            res.status(500).json({ err: err })
            return
        }
        res.status(200).json({ 
            products: items 
        })
    })
})


//Return a JSON object containing all the Product’s details in the MongoDB
app.get("/Products/:id", (req, res) => {
    products.findOne({_id : ObjectId(req.params.id)}).then((item) => {
        res.status(200).json({ 
            item
        })
    })
})

// Given the filename of the image for a product return it's static image
app.use(express.static('./public'))
    .get("/Products/images/:filename", (req, res) => {
        let filename = req.params.filename
        res.sendFile('./public/images/'+filename, { root: __dirname })
})

//Return a JSON object the specified {field} info from the Product’s details in the MongoDB
app.get("/Products/:id/:field", (req, res) => {
    field = req.params.field
    products.findOne({_id : ObjectId(req.params.id)}).then((item) => {
        let result = {}
        result[field] = item[field]
        res.status(200).send(result)
    })
})




app.listen(3000, () => console.log("Server ready"))