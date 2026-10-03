const express = require("express")
const app = express()
const multer = require("multer")
const path = require("path")
const crypto = require("crypto")

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")))

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(16, function (err, raw) {
        const fn = raw.toString("hex")+ path.extname(file.originalname)
        cb(null, fn)
    })
  }
})

const upload = multer({ storage: storage })


app.get("/",(req, res)=>{
    res.render("test")
})

app.post("/upload", upload.single("image"),(req, res)=>{
  console.log(req.file)
})

app.listen(3000)