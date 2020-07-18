const express = require('express')
const path = require('path')

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/" , express.static(path.join(__dirname , 'public')))

//when we say require('x') 
//1: it searches for x.js if not found 
//2: it will search for x.json if not found 
//3: it will search for x/index.js 
app.use("/api" , require('./routes/api').route)

app.listen('3462', ()=> console.log(`Sever is listening at http://localhost:3462`))