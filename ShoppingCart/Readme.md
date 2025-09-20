# Mini Shopping Cart

This project is from a web dev course from Udemy that I'm following. Though I've not watched this project video yet, building from my own no video

## 📌 Overview
A simple shopping cart app built with **HTML, CSS, and JavaScript**.  
It allows users to:
- Add products to cart
- View total price
- Checkout (cart clears)
- Data persistence using **localStorage**

## 🚀 Features
- Add products dynamically
- Shows total cart value
- Persists cart items even after page refresh
- Checkout button clears cart

## ScreenShot


# Thoughts

First grab all the necessary elements from the DOM.
Now I have to put a click event listener on all the add-to-cart-btn (which should be selected from querySelectorAll).
Now loop through all the add-to-cart-btn UIs using the forEach method, and then put a click event listener on all the buttons.
Now grab the product name and price and store them in an array of objects.
{productName: price}
We have access to the add-to-cart button, so using the event, we have to traverse to its parent element using e.target.parentNode.
Now we have the parentNode, which is
``` HTML
<div class="product-item">
                    <span class="product">Product 1 - $20.10</span>
                    <button class="add-to-cart-btn">Add to cart</button>
                </div>
```

So we will try to access the first child using the element selector.
```js
let productInfo = e.target.parentNode.querySelector('.product')
```
Now we have the direct access of the first element, which has the product name and price. Now we will divide this into two pieces and store them in obj with the key-value pair {name: productName, price: product}.

We can split this using the split method.
```JS
let productInfo = e.target.parentNode.querySelector('.product').innerHTML.split('-');
```
Now we will create a few functions.
- renderCartItem()

Which will render all the product and price from the cart array and display it in the DOM.

- totalPriceToPay()

Which will be responsible for calculating the total price of the product; we can use the `reduce` method.

- saveCartItem()

Which will be responsible for saving all the cart items in `localStorage` so data can be persistent even after the page load

## renderCartItem()
In this function we will loop through each cart array of objects and then will create new elements. Make sure to clear `cartItems.innerHTML = ''` each time we render cartItem, so it should only get from the cart array of obj.

## totalPriceToPay()
Now write code for calculating the total price of the product, where the `reduce` method will be helpful.

## saveCartItem()
Save cart item will be responsible for saving data in local storage. Remember storage. Local storage only saves data in strings, so make sure to convert arrays/objects into strings using ``.

<hr>
Now we will put click event listener in checkOut button and will call checkOut function

## checkOut()
This function will be responsible for clearing the `cart` array and will call saveCartItem(), renderCartItem(), totalPriceToPay() but before make sure cart.length isn't zero if it's zero then return the function


# Next Things to implement
- [x] Save data to localStorage
- [ ] Add remove button