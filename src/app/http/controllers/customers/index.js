const { json } = require("express");

class CartController {
    index(req, res) {
        res.render('cart');
    }
    update(req, res) {
        // let cart ={
        //     items: { pizzaID:{ itemObj, quality: 0 } },
        //     totalQuality: 0;
        //     totalPrice: 0;
        // }
        //for the first time creating and adding basic object structure
        if (!req.session.cart) {
            req.session.cart = {
                items: {},
                totalQuality: 0,
                totalPrice: 0
            }
        }
        let cart = req.session.cart;
        //q console.log(req.body);
        //Check if item doesn't exist in cart
        if (!cart.items[req.body._id]) {
            cart.items[req.body._id] = {
                item: req.body,
                quality: 0
            }
            cart.totalQuality = cart.totalQuality + 1;
            cart.totalPrice = cart.totalPrice + req.body.price
        } else {
            cart.items[req.body._id].quality = cart.items[req.body._id].quality + 1;
            cart.totalQuality = cart.totalQuality + 1;
            cart.totalPrice = cart.totalPrice + req.body.price
        }
        res.json({ totalQuality: req.session.cart.totalQuality });
    }
}

module.exports = new CartController;