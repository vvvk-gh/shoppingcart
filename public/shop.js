//gets all the products from the 
function fetchProducts (done){
    $.get('/api/products' , function (data){
        done(data)
    })
}

//add into the database
function addProduct (name , manufacturer , price ,done){
    $.post('/api/products' ,{
        name:name,
        manufacturer:manufacturer,
        price:price,   
    } , function (data) {
      done(data)  
    })
}


function createProductCard(product){
    return (`
    <div class="col-4 card mx-1 my-2 p-2">
        <h4 class ="product-name">${product.name}</h4>
       <div class="product-manufacturer">${product.manufacturer}</div>
            <div class="row">
                <div class ="col m-3">
                <b>${product.price}</b>
            </div>
      </div>
      <div class ="row mx-2 my-2">
      <button class ="col-4 btn btn-sm btn-warning mx-3" id =${product.id} onclick = 'getProductId(this)';>Add to Cart</button>
      <button class ="col-2 btn btn-sm btn-success mx-3">Buy</button>
      </div>
</div>
`)
}




