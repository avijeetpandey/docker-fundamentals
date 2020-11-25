const express = require('express')
const app = express()


app.get("/",(req,res)=>{
    res.send("<h1>Visiting Root</h1>")
})

app.get("/login",(req,res)=>{
    res.json({
        message : "You are logged In"
    })
})

app.listen(3000,()=>{
    console.log('Server is up and running')
})