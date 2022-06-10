const express = require('express') //express module + methods
const app = express()
const MongoClient = require('mongodb').MongoClient //database module + methods
const PORT = 2001 


let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'work.out'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true})
    .then(client => {
        console.log(`Now connected to the ${dbName} database.`)
        db = client.db(dbName)
    })


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
    db.collection('exercises').find().toArray()
        .then( data => {
            res.render('index.ejs', {info: data})
        }).catch(error => console.error(error))
})

app.post('/addExercise', (req, res) => {
    db.collection('exercises').insertOne({name: req.body.name, 
    description: req.body.description, upvotes: 0 })
        .then(result => {
            console.log('Exercise added successfully.')
            res.redirect('/')
        }).catch(error => console.error(error))
})

app.put('/', (req, res) => {
    db.collection('exercises').updateOne({name: req.body.nameS, description: req.body.descriptionS,
        likes: req.body.upvotesS},
        {$set: {upvotes: req.body.upvotesS +1}},
        {sort: {_id: -1}, upsert: true})
    .then( result => {
        console.log('One exercise upvoted')
        response.json('Upvote applied')
        }).catch( error => console.error(error))
})