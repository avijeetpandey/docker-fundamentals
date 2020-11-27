const mongoose  = require('mongoose')

const DATABASE = "mongodb://mymongo:27017/testdb"

mongoose.connect(DATABASE)
    .then(()=>{
        console.log("Database coonected")
    })
    .catch(()=>{
        console.log("OOPS connection DB failed")
    })