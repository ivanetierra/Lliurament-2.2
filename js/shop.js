// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array

    var product = products.find(product => product.id === id)

    var cartItem = cart.find(item => item.id === product.id)
    
    if(cartItem){
        cartItem.quantity += 1;
    }
    else{
        cart.push({...product, quantity: 1})
    }

    printCart();
}

// Exercise 2
function cleanCart() {
    cart = [];
    printCart();
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array

    var total = 0;
    cart.forEach(item => {
        if(item.subtotalWithDiscount){
            total += item.subtotalWithDiscount * item.quantity;
        }else{
            total += item.price * item.quantity;
        }
    })    
    return total;
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    cart.forEach(item => {
        if(item.offer){
            if(item.quantity >= item.offer.number){
                item.subtotalWithDiscount = item.price - (item.price * item.offer.percent / 100)
            }else{
                delete item.subtotalWithDiscount;
            }
        }
    })  
}

// Exercise 5
function printCart() {

    applyPromotionsCart();
 
    var cartList = document.getElementById('cart_list');

    var html = '';

    cart.forEach(item => {
        var total = item.price * item.quantity;

        if (item.subtotalWithDiscount) {
            total = item.subtotalWithDiscount * item.quantity;
        }

        html += `
        <tr>
        <th scope="row" class="align-middle">${item.name}</th>
        <td class="align-middle">$${item.price.toFixed(2)}</td>
        <td class="align-middle">${item.quantity}</td>
        <td class="align-middle">$${total.toFixed(2)}</td>
        <td class="align-middle">
            <div class="d-flex">
                <button type="button" class="btn btn-secondary m-2 py-1" onclick="removeFromCart(${item.id})">-</button>
                <button type="button" class="btn btn-secondary m-2 py-1" onclick="buy(${item.id})">+</button>
            </div>
        </td>
    </tr>
        `;
    });

    cartList.innerHTML = html;

    document.getElementById('total_price').textContent = calculateTotal().toFixed(2);
    document.getElementById('count_product').textContent = cart.length;
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    var cartItem = cart.find(item => item.id === id);
    if(cartItem){
        cartItem.quantity -= 1;
    }
    if(cartItem.quantity === 0){
        cart.splice(cart.indexOf(cartItem), 1);
    }

    applyPromotionsCart();
    printCart();
}

function open_modal() {
    printCart();
}



