const express = require('express')
const app = express()

app.set('view engine' , 'hbs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/' , (req , res)=>{
        res.send("Hello Babu")
})

app.listen('3462', ()=>{
    console.log(`Sever is listening at localhost:3462`)
})