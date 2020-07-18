const Sequlize =  require('sequelize');

const {DataTypes} = Sequlize.DataTypes;

//Define and Accessing the DB
const db = new Sequlize('shopdb' , 'shopper' , 'shoppass' ,{
    host: 'localhost',
    dialect : 'mysql',
    pool : {
        min : 0,
        max : 5,  
    }
})


//Verifies the Credentials
db.authenticate()
    .then(()=> console.log(`Credentials Worked`))
    .catch((e)=> console.log(`Error : ${e}`))



//Creating a model in ORM  = Table in Db
//db.define(x , {obj}) --> x will be name of the table and obj will defines the columns , datatype of the columns in the table
const User = db.define('users' , {
    id : {
        type:DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
    },
    name :{
        type : DataTypes.STRING,
        allowNull : false,
    }
})



const Product = db.define('products' , {
    id : {
        type : Sequlize.INTEGER,
        autoIncrement : true,
        primaryKey : true,
    },
    name : {
        type : Sequlize.STRING,
        allowNull: false,   
    },
    manufacturer : Sequlize.STRING,
    price : {
        type : Sequlize.FLOAT,
        allowNull: false,
        defaultValue : 0.0,
    }
})

//Syncs the DB
db.sync({alter:true})
    .then(()=> console.log(`Database Synchronized`))
    .catch((e)=> console.log(`Error : ${e}`))


exports = module.exports = {
    db , User , Product
}