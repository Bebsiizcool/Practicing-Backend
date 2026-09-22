const express = require('express')
const app = express()
const userModel = require("./models/user")
const postModel = require("./models/posts")

app.get("/", (req, res)=>{
    res.send("hello world")
})

app.get("/create", async(req, res)=>{
    
    let createduser = await userModel.create({
        username: "bebsi",
        email: "basilshahzad19@gmail.com",
        age: 19        
    })

    res.send(createduser)
})

app.get("/post", async(req, res)=>{
 let post = await postModel.create({
    postdata: "hello sare log kaise ho ",
    user: "6ab2a767d7b27c43b71ff529"
 })

    let user = await userModel.findOne({_id: "6ab2a767d7b27c43b71ff529"})
    user.posts.push(post._id)
    await user.save()
    res.send({post, user})
})

app.listen(3000)