
let iconcart = document.querySelector('.icon-cart');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let listProductHTML = document.querySelector('.list-product');
let listcartHTML = document.querySelector('.listcart')
let iconcartspan = document.querySelector('.icon-cart span');

let listProduct = [];
let carts = [];
iconcart.addEventListener('click',()=>{
    body.classList.toggle('showCart')
})

closeCart.addEventListener('click', ()=>{
    body.classList.toggle('showCart')
})
const addDataToHTML = ()=>{
    listProductHTML.innerHTML = '';
    if(listProducts.length > 0){
        listProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML =`
            <img src="${product.image}" alt="">
                <h2>"${product.name}"</h2>
                <div class="price">"${product.price}"</div>
                <button class="addcart">
                    Add To Cart 
                </button>
                `;
                listProductHTML.appendChild(newProduct);
        })
    }
}
listProductHTML.addEventListener('click',(event)=>{
    let positionClick = event.target;
    if(positionClick.classList.contains('addcart')){
        let product_id = positionClick.parentElement.dataset.id;
        addToCart(product_id);
    }
})

const addToCart = (product_id)=>{
    let positionThisProductInCart = carts.findIndex((value)=>value.product_id);
if(carts.lenght <= 0){
    carts =  [{
        product_id: product_id,
        quantity : 1
    }]
}else if(positionThisProductInCart < 0){
    carts.push({
        product_id: product_id,
        quantity: 1
    });
}else{
    carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;
}
addCarttoHTML();
}
const addCarttoHTML = () =>{
    listcartHTML.innerHTML='';
    if(carts.length > 0){
        carts.forEach(cart => {
            let newCart = document.createElement('div');
            newCart.classList.add('item');
            let positionProduct = listProducts.findindex((value)=>value.id == cart.product_id);
            let info = listProducts[positionProduct];
            newCart.innerHTML=`
            <div class="image">
                    <img src="${info.image}" alt="">
                </div>
                <div class="name">
                    NIKE AIR 1 
                </div>
                <div class="total-price">
                    7500
                </div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${cart.quantity}</span>
                    <span class="plus">></span>
                </div>
                `;
                listcartHTML.appendChild(newCart);
        })
    }
}
const initApp =()=>{
    fetch("/product.json")
    .then(response => response.json())
    .then(data => {
        listProducts = data;
        console.log(listProducts);
        addDataToHTML();
        
    })

}
initApp();