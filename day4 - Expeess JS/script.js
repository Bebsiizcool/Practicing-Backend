const express = require('express')
const app = express()

app.use(function(req, res, next){
    console.log("middleware chala");
    next() // - use to forword the req to routers
    
})
// this is called routes 
app.get('/', function(req,res){
    res.send("hellow World")
})

app.use(function(err, req, res,next){
    console.error(err.stack)
    res.status(500).send('something broke')
})

app.listen(3000)