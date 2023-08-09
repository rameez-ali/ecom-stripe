const asyncHandler = require('express-async-handler');
const Cart = require("../models/cartModel");

//@desc get all carts
//@route get /api/carts
//@access public

const getAllCart = asyncHandler(async(req, res) => {
    
    const carts = await Cart.find();
    
    if(carts){
        res.status(200).json(carts);
    }
    else{
        res.status(404).json("No Products Found in Cart");
    }

});

//@desc created product
//@route post /api/products
//@access public

const createCart = asyncHandler(async(req, res) => {
    const {title, desc, img, categories, size, color, price } = req.body;
    if(!title || !desc || !price){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const cart = await Cart.create({
        title,
        desc,
        img,
        categories,
        size,
        color,
        price,
        user_id:req.user.id,
    });

    res.status(201).json(cart);
});

//@desc get single product
//@route get /api/products/:id
//@access public

const getCart = asyncHandler(async(req, res) => {
    const cart = await Cart.findById(req.params.id);
    if(!cart){
        res.status(404);
        throw new Error("No Products Found in Cart");
    }
    res.status(200).json(cart);
});

//@desc get user cart
//@route get /api/carts/user/:userId
//@access public

const getUserCart = asyncHandler(async(req, res) => {
    const UserCart = await Cart.findOne({userId:req.params.userId});
    if(!UserCart){
        res.status(404);
        throw new Error("No Products Found In User Cart");
    }
    res.status(200).json(UserCart);
});

//@desc update cart
//@route put /api/carts/:id
//@access public

const updateCart = asyncHandler(async(req, res) => {
    
    const updatedcart = await Cart.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatedcart);
});

//@desc delete product
//@route delete /api/products/:id
//@access public

const deleteCart = asyncHandler(async(req, res) => {
    const cart = await Cart.findById(req.params.id);
    if(!cart){
        res.status(404);
        throw new Error("No Products Found in Cart to Delete");
    }

    await cart.deleteOne()
    res.status(200).json(cart);
});

module.exports = {getAllCart, createCart, getCart, updateCart, deleteCart, getUserCart}