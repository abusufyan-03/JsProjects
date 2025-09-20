const addToCartButton = document.querySelectorAll('.add-to-cart-btn');
const cartItems = document.getElementById('cart-items');
const emptyCart = document.getElementById('empty-cart');
const cartTotal = document.getElementById('cart-total');
const checkOutButton = document.getElementById('check-out-btn');
const productList = document.getElementById('product-list');
// console.log(productList)

let cart = JSON.parse(localStorage.getItem('product')) || [];


renderCartItems()
totalPriceToPay()


addToCartButton.forEach((cartBtns) => {
    cartBtns.addEventListener('click', function (e) {
        emptyCart.innerHTML = '';
        console.log(e.target.parentNode.querySelector('.product').innerHTML.split('-'));
        let productInfo = e.target.parentNode.querySelector('.product').innerHTML.split('-');
        console.log(productInfo);
        const obj = {
            name: productInfo[0].trim(),
            price: parseFloat(productInfo[1].replace('$', ''))
        }
        console.log(obj)
        cart.push(obj)
        console.log(cart)
        renderCartItems()
        totalPriceToPay()
        saveCartItem(cart)
    });
});

function renderCartItems() {
    cartItems.innerHTML = '';
    if (cart.length === 0) {
        checkOutButton.style.opacity = .5;
        cartItems.innerHTML = `<p id='empty-cart'>Your cart is empty</p>`
        return;
    }
    cart.forEach((item) => {
        const p = document.createElement('p');
        p.classList.add('cart-item')
        p.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(p)
    })
    checkOutButton.style.opacity = 1
}

function totalPriceToPay() {
    const priceToPay = cart.reduce((sum, current) => sum + current.price, 0);
    console.log(priceToPay);
    cartTotal.innerHTML = `Total: $${priceToPay.toFixed(2)}`;
}

function saveCartItem() {
    localStorage.setItem('product', JSON.stringify(cart))
}

checkOutButton.addEventListener('click', function (e) {
    checkOut()
})

function checkOut() {
    if (cart.length === 0) {
        return;
    }
    cart = [];
    saveCartItem()
    renderCartItems();
    totalPriceToPay();
    alert("Check out done!")
    console.log(cart)
}
