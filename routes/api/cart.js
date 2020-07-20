const Cart = require('../../db').Cart;
const route = require('express').Router();

route.get('/' , (req , res)=>{
    Cart.findAll()
        .then((cartproducts)=> res.status(200).send(cartproducts))
        .catch((err)=> res.status(500).send({error : "Can't retrive prodcuts in the cart"}))
})

route.post('/' , (req,res)=>{
    Cart.create({
        id: req.body.id,
        name :req.body.name,
        price : req.body.price
    })
    .then((cartproduct) => res.status(201).send(cartproduct))
    .catch((err)=> res.status(501).send({
        error : 'Cant add the product into the database'
    }))
})

exports = module.exports = route;