const express = require('express')
const bodyParser = require('body-parser')
//const config = require('./config')
const Post = require('./models/post')
const path = require('path')

const app = express()
//const port = 3000

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist')))
//app.get('/', (req, res) => res.send('Hello World!clear'))

//const arr = ["That'd be good.", "World", "Hello", "Test"]

app.get('/', (req, res) => {
    /*
    Post.find().then(posts=>{
        res.render('index', {posts})
    })*/
    res.render('index')

    
})

/*
app.get('/create', (req, res) => res.render('create'))
app.post('/create', (req, res) => {
    //console.log(req.body)
    //arr.push(req.body.text)
    //res.end(JSON.stringify(req.body))
    const {title, body} = req.body
    Post.create({
        title,
        body
    }).then(post=>console.log(post.id))
    res.redirect('/')
})*/

module.exports = app