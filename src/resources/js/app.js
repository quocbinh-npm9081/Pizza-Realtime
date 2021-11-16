const Noty = require('noty');
const axios = require('axios');
let addToCart = document.querySelectorAll('.add-to-cart');
const cartCounter = document.getElementById('cart-counter');

function updateCart(pizza) { // install axios library to use AJAX
    axios.post('/update-cart', pizza)
        .then(function(res) {
            //console.log(res.data);
            cartCounter.innerHTML = res.data.totalQuality;
            new Noty({
                type: 'success',
                text: 'Item add to cart !',
                timeout: 500,
                progressBar: false,
            }).show();
        }).catch((error) => {
            new Noty({
                type: 'error',
                text: 'Something went wrong !',
                timeout: 500,
                progressBar: false,
            }).show();
        })
}

addToCart.forEach(btn => {
    btn.addEventListener('click', function() {
        let pizzaJSON = btn.dataset.pizza; // data-pizza ở dạng JSON
        //let pizza = btn.getAttribute('data-pizza'); // thay vi su dung dataset ta có thể sử dụng getAttribute 
        let pizzaOBJ = JSON.parse(btn.dataset.pizza); // data-pizza được chuyển sang dạng Object để lưu vào Cart
        updateCart(pizzaOBJ);
        // console.log(pizzaOBJ);
    })
});