const asyncHandler = require('express-async-handler');
const Order = require("../models/orderModel");

//@desc get all carts
//@route get /api/carts
//@access public

const getAllOrder = asyncHandler(async(req, res) => {
    
    const orders = await Order.find();
    
    if(orders){
        res.status(200).json(orders);
    }
    else{
        res.status(404).json("No Orders Found");
    }

});

//@desc created product
//@route post /api/products
//@access public

const createOrder = asyncHandler(async(req, res) => {
    const newOrder =  new Order(req.body);

    try{
        const savedProduct = await newOrder.save();
        res.status(201).json(savedProduct);
    }
    catch(err){
        console.log(err);
    }

    // if(savedProduct){
    //     res.status(201).json(savedProduct);
    // }
    // res.status(404).json(savedProduct);

});

//@desc get single product
//@route get /api/products/:id
//@access public

const getOrder = asyncHandler(async(req, res) => {
    const order = await Order.findById(req.params.id);
    if(!order){
        res.status(404);
        throw new Error("No Orders Found in Cart");
    }
    res.status(200).json(order);
});

//@desc get user cart
//@route get /api/carts/user/:userId
//@access public

// const getUserCart = asyncHandler(async(req, res) => {
//     const UserCart = await Cart.findOne({userId:req.params.userId});
//     if(!UserCart){
//         res.status(404);
//         throw new Error("No Orders Found In User Cart");
//     }
//     res.status(200).json(UserCart);
// });

//@desc update cart
//@route put /api/carts/:id
//@access public

const updateOrder = asyncHandler(async(req, res) => {
    
    const updatedorder = await Order.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatedorder);
});

//@desc delete product
//@route delete /api/products/:id
//@access public

const deleteOrder = asyncHandler(async(req, res) => {
    const order = await Order.findById(req.params.id);
    if(!order){
        res.status(404);
        throw new Error("No Orders Found to Delete");
    }

    await order.deleteOne()
    res.status(200).json(order);
});

module.exports = {getAllOrder, createOrder, getOrder, updateOrder, deleteOrder}