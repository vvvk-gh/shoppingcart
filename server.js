const express = require('express')
const path = require('path')

const app = express()

app.use("/" , express.static(path.join(__dirname , 'public')))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.listen('3462', ()=> console.log(`Sever is listening at http://localhost:3462`))