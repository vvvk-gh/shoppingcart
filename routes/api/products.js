const Product = require('../../db').Product
const route = require('express').Router();

route.get('/' , (req , res) =>{
        //Get all Products
        Product.findAll()
            .then((products)=>{
                res.status(200).send(products)
            })
            .catch((e) => res.status(500).send({
                error :`Cant retrive products: 
                 ${e}`
            }))
})


route.post('/' , (req , res) =>{
//Add a new product 

    if(isNaN(req.body.price)){
        return res.status(403).send({
            error : 'Price is not a valid number'
        })
    }

    Product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price : parseFloat(req.body.price)
    })
    .then((product)=> res.status(201).send({product}))
    .catch((e)=> res.status(501).send({error : `Cant Add the product into the DB : ${e}`}))
})

exports = module.exports = route;