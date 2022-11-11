const express = require ("express")
const app =express()
const db=require("./models")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
const PORT = process.env.PORT || 3000



// {force:true}  : This creates the table, dropping it first if it already existed
// force:true adds a "DROP TABLE IF EXISTS" before trying to create the table/ If you force, existing tables will be overwritten.
// Usage : db.sequelize.sync({force:true})
db.sequelize.sync().then(()=>console.log(`Server Run Perfectly on http://localhost:${PORT}`))