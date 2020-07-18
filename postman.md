# Task 3 

## After creating the api for users and products test them using the following

```postman

    GET http://127.0.0.1:3462/api/users/

    POST http://127.0.0.1:3462/api/users/

    select Body
    select x-www.form.urlencoded
    
    key   |  value
    ======|===========
    name  |  vamsi 
    
    The above should create a new user 


    GET http://127.0.0.1:3462/api/products/

    POST http://127.0.0.1:3462/api/products/
    
    select Body
    select x-www.form.urlencoded
    
    key   |  value
    ======|===========
    name  |  iphone 
    price |  500 USD
    
    The above should create a new product 
    
```