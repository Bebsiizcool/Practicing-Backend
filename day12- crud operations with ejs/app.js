const express = require('express')
const path = require('path')
const app = express()
const usermodel = require('./models/user')

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res)=>{  
    res.render("index")
})

app.get('/read', async(req, res)=>{
    let allusers = await usermodel.find()
    res.render("read", {allusers})
})

app.get('/edit/:id', async(req, res)=>{
   let user = await usermodel.findOne({ _id: req.params.id})
   res.render("edit", {user})
})

app.post('/update/:id', async(req, res)=>{
    let {name, email, image} = req.body
    let user = await usermodel.findOneAndUpdate({ _id: req.params.id}, {name, email, image}, {new:true})
    res.redirect("/read")
})



app.post('/create', async (req, res)=>{
    let {name, email, image} = req.body
    let createduser =  await usermodel.create({
        name,
        email,
        image
    })

    res.redirect('/read')
})

app.get('/delete/:id', async(req, res)=>{
      let allusers = await usermodel.findOneAndDelete({_id: req.params.id})
      res.redirect("/read")
    
})




app.listen(3000)