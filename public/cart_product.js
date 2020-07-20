function fetchCartProducts(done) {
    $.get('/api/cart' , function(data) {
         done(data)     
    })
}

function addCartProduct (product ,done){
    $.post('/api/cart' ,{
        id: product.id,
        name: product.name,
        price: product.price,   
    },function(data){
            done(data)
    })
}


function createCartProduct(product){
    //console.log(product)
    return(`
            <div class ="row my-2">
                <div class="col-3">${product.name}</div>
                <div class="col-3">${product.price}</div>
                <button class ="col-3 btn btn-md btn-danger" id=${product.id} onclick="DeleteCartProduct(this)";>Del</button>
            </div>
        `)
}

$(function () {    
    let cartList = $("#cartlist"); 
    fetchCartProducts(function(cartproducts){
             cartList.empty();
            for(let cartproduct of cartproducts){
                cartList.append(createCartProduct(cartproduct))
            }
             
      })
    
    })
    
    function getProductId(id) {
        let productId = $(id).attr("id");
        console.log(`product with ${productId} is clicked`);
        // let ResProduct = {};
        // console.log(ResProduct);
        fetchProducts(function(products){
                                 for(product of products){
                                     if(product.id == productId){
                                             console.log(product);
                                        addCartProduct(product, function(){
                                            console.log(`added Product into Cart`)
                                            window.alert("Added in the cartproducts")
                                        })
                                     }
                                  }
                            })
      }
        