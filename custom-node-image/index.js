const express = require('express')
const app = express()


app.get("/",(req,res)=>{
    res.send("<h1>Visiting Root</h1>")
})

app.listen(3000,()=>{
    console.log('Server is up and running')
})