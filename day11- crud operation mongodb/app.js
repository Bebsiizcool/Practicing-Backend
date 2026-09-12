const express = require('express')
const app = express()

const userModel = require('./usermodel')

app.get("/",(req, res)=>{
    res.send("hey")
})


app.get("/create", async (req, res)=>{
    let createduser = await userModel.create({
        name: "bebsi2",
        username: "unclebebsi2",
        email: "basilshahzad128@gmail.com"
    })

    res.send(createduser)
})

app.get("/update", async (req, res)=>{
     let userupated = await userModel.findOneAndUpdate({username: "unclebebsi"}, {name: "basil shahzad"}, {new: true})

    res.send(userupated)
})

app.get("/read", async (req, res)=>{
   let usersread = await userModel.find()
   res.send(usersread)
})

app.get("/delete", async (req, res)=>{
   let usersread = await userModel.findOneAndDelete({username: "unclebebsi"})
   res.send(usersread)
})




app.listen(3000)