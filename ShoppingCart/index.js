// const addToCartButton = document.querySelectorAll('.add-to-cart-btn');
// const cartItems = document.getElementById('cart-items');
// const emptyCart = document.getElementById('empty-cart');
// const cartTotal = document.getElementById('cart-total');
// const checkOutButton = document.getElementById('check-out-btn');
// const productList = document.getElementById('product-list');
// // console.log(productList)

// let cart = JSON.parse(localStorage.getItem('product')) || [];


// renderCartItems()
// totalPriceToPay()


// addToCartButton.forEach((cartBtns) => {
//     cartBtns.addEventListener('click', function (e) {
//         console.log(e.target.parentNode.querySelector('.product').innerHTML.split('-'));
//         let productInfo = e.target.parentNode.querySelector('.product').innerHTML.split('-');
//         console.log(productInfo);
//         const obj = {
//             name: productInfo[0].trim(),
//             price: parseFloat(productInfo[1].replace('$', ''))
//         }
//         console.log(obj)
//         cart.push(obj)
//         console.log(cart)
//         renderCartItems()
//         totalPriceToPay()
//         saveCartItem(cart)
//     });
// });

// function renderCartItems() {
//     cartItems.innerHTML = '';
//     if (cart.length === 0) {
//         checkOutButton.style.opacity = .5;
//         cartItems.innerHTML = `<p id='empty-cart'>Your cart is empty</p>`
//         return;
//     }
//     cart.forEach((item) => {
//         const p = document.createElement('p');
//         p.classList.add('cart-item')
//         p.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
//         cartItems.appendChild(p)
//     })
//     checkOutButton.style.opacity = 1
// }

// function totalPriceToPay() {
//     const priceToPay = cart.reduce((sum, current) => sum + current.price, 0);
//     console.log(priceToPay);
//     cartTotal.innerHTML = `Total: $${priceToPay.toFixed(2)}`;
// }

// function saveCartItem() {
//     localStorage.setItem('product', JSON.stringify(cart))
// }

// checkOutButton.addEventListener('click', function (e) {
//     checkOut()
// })

// function checkOut() {
//     if (cart.length === 0) {
//         return;
//     }
//     cart = [];
//     saveCartItem()
//     renderCartItems();
//     totalPriceToPay();
//     alert("Check out done!")
//     console.log(cart)
// }


// Refactoring code

document.addEventListener('DOMContentLoaded', function () {
    products = [
        {
            id: 1,
            name: 'product 1',
            price: 20.00
        },
        {
            id: 2,
            name: 'product 2',
            price: 39.00
        },
        {
            id: 3,
            name: 'product 3',
            price: 59.00
        }
    ];

    let cart = JSON.parse(localStorage.getItem('product')) || [];
    
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkOutButton = document.getElementById('check-out-btn');
    const productList = document.getElementById('product-list');

    products.forEach(item => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.innerHTML = `
    <span>${item.name} - $${item.price.toFixed(2)}</span>
    <button data-id='${item.id}' class='add-to-cart-btn'> Add to cart</button>
    `;
        productList.appendChild(productDiv)
    });

    addToCart()
    calculateTotalPrice()


    productList.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            console.log("Clicked the add to cart button");
            const prodcutId = parseInt(e.target.getAttribute('data-id'));
            console.log(prodcutId);
            const selectedProduct = products.find(p => p.id === prodcutId);
            console.log(selectedProduct);
            cart.push(selectedProduct)
            saveCartItem();
            addToCart();
            calculateTotalPrice();
        }
    });

    function addToCart() {
        cartItems.innerHTML = '';
        if(cart.length === 0) {
            cartItems.innerHTML = `<p id='empty-cart'> Your cart is empy</p>`;
            checkOutButton.style.opacity = .5;
            return;
        }
        cart.forEach((item) => {
            const p = document.createElement('p');
            p.classList.add('cart-item');
            p.innerHTML = `
        ${item.name} - $${item.price.toFixed(2)}
        `;
        cartItems.appendChild(p);
        })
        checkOutButton.style.opacity = 1;
    };

    function calculateTotalPrice(){
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.innerHTML = `$${total.toFixed(2)}`
    };

    checkOutButton.addEventListener('click', function checkOut() {
        alert("Checkout successfully!");
        cart.length = 0;
        saveCartItem();
        console.log(cart)
        addToCart();
        calculateTotalPrice()
    });

    function saveCartItem(){
        localStorage.setItem('product',  JSON.stringify(cart));
    };



});