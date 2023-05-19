// // const http = require("http")

// // const server = http.createServer((req, res) => {
// //     res.end('Hello')
// // })

// // server.listen(3000)
// import respond from "./src/responder.js";
import express from "express";

// const app = express()

// // app.get('/', (req, res) => {
// //     res.send("Hello from express with nodemon")
// // })

// app.get('/', (req, res) => {
//     // res.sendFile('pages/index.html', {root: './src'})
    
// })

// app.post('/seacrh', (req, res) => {
//     res.send(req.body)
// })


import hbs from "hbs"
import path from "path"

const __dirname = path.resolve()
const app = express()

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs')

hbs.registerPartials(path.join(__dirname, 'views/partials'))

app.get('/', (req, res) => {
    res.render('index', {name: 'Wirt', mainTitle: "Index"})
})

app.get('/appearance', (req, res) => {
    res.render('appearance', {name: 'Wirt', mainTitle: "Appearance"})
})

app.get('/personality', (req, res) => {
    res.render('personality', {name: 'Wirt', mainTitle: "Personality"})
})

app.get('/story', (req, res) => {
    res.render('story', {name: 'Wirt', mainTitle: "Story"})
})

app.get('/links', (req, res) => {
    res.render('links', {name: 'Wirt', mainTitle: "Links"})
})


app.listen(3000, () => {
    console.log('express start')
})