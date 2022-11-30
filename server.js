const express = require('express')
const app = express()
const port = 2804
app.use(express.static('html'));
const date = require('./Middleware/Date')

app.get('/', date , (req,res)=>{
    res.sendFile(__dirname+'/html/index.html')
})

app.get('/services', date , (req,res)=>{
    res.sendFile(__dirname+'/html/services.html')
})

app.get('/contact', date , (req,res)=>{
    res.sendFile(__dirname+'/html/contact.html')
})

app.listen(port,err=>{
    err ? console.log(err):console.log(`You are connected to the port ${port}`)
})
