const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const submissions = []
const port = process.env.PORT || 3000
const path = require('path')

app.get('/', serverIndex)
app.get('/contact.html', serveContact)
app.post('/contact/send', contactHandler)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.get('/submissions', serveSubmission)

function serverIndex(request, response){
    response.sendFile('index.html', {root: __dirname})
}

function serveContact(request, response){
    response.sendFile('contact.html', {root: __dirname})
}

function contactHandler(request, response){
    submissions.push(request.body)
    response.redirect('/submissions')
}

function serveSubmission(request, response){
    response.json(submissions)
}


app.listen(port)
console.log(`Server is running on port ${port}...`)
