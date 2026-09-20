const express = require ('express')
const app = express()
const cookeParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


app.use(cookeParser())

app.get("/", (req, res)=>{
    // res.cookie("name", "bebsi")
    res.send("done")
})

// to encrypt password 
app.get("/read", (req, res)=>{
    bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("bebsi", salt, function(err, hash) {
        console.log(hash)
    });
});
})

// to decrypt/compare
app.get("/relt", (req, res)=>{
    bcrypt.compare("bebsi", "$2b$10$DnX7GOv8xj46wMRE/i9rxuJ2e/C6O.UWxxKcZ8E1XWYz1sBqyCkHO", function(err, result) {
    console.log(result)
});
})


// jwt 
app.get("/jwt", (req, res)=>{
    let token = jwt.sign({email: "bebsi@gamil.com"}, "secret")
    res.cookie("token", token)
    res.send("done")  
})

// jwt read 
app.get("/jwtread", (req, res)=>{
    let data = jwt.verify(req.cookies.token, "secret")
    console.log(data)
})

app.listen(3000)