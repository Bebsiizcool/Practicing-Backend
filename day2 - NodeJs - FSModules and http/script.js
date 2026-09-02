const fs = require('node:fs');
const http = require('http')

fs.writeFile("bebis.txt", "hello world", function(err){
    if(err){ console.error(err)}
    else{ console.log("done")}
})

fs.appendFile("bebis.txt", " hello bebsi", function(err){
    if(err){ console.error(err)}
    else{ console.log("done")}
})

fs.rename("bebis.txt", "green.txt", function(err){
    if(err){ console.error(err)}
    else{ console.log("done")}
} )

fs.copyFile("green.txt", "./copy/copy.txt", function(err){
    if(err){ console.error(err)}
    else{ console.log("done")}
})

// delete file 
fs.unlink("bebis.txt", function(err){
    if(err){ console.error(err)}
    else{ console.log("removed")}
})

// to remove directory/folder 
fs.rmdir("./copy", {recursive:true}, function(err){
    if(err){ console.error(err)}
    else{ console.log("removed")}
})

// http module 
 const server = http.createServer(function(req, rs){
    res.end("Hello World")
})

server.listen(3000)