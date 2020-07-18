const route = require('express').Router();

//const {db , User} = require('../../db')
//importing only User object
const User = require('../../db').User

route.get('/' , (req , res) => {
    //Send an array of all  Users from the DB
    User.findAll()
    .then(()=>{
        res.status(200).send(users)      
    })
    .catch((e)=> {
        res.status(500).send({
            error : 'Could not Retrive Users'
        })
    })
})


route.post('/' , (req , res)=>{
    //We expect the request having the name in it
    //We create a new User
    User.create({
        name : req.body.name        
    }).then((user)=>{
        res.status(201).send(user); 
        //201 : Created. The request has been fulfilled and has resulted in one or more new resources being created.
    }).catch((e)=>{
        res.status(501).send({
            error : 'Could not add new user'
        })
    })
})

exports = module.exports =  route;