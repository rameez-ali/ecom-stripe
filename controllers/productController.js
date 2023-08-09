const asyncHandler = require('express-async-handler');
const Product = require("../models/productModel");

//@desc get all products
//@route get /api/products
//@access public

const getAllProduct = asyncHandler(async(req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    
    let products
    
    if(qNew){
        products = await Product.find().sort({createdAt:-1});
    }
    else if(qCategory){
        products = await Product.find({categories:{
            $in:[qCategory],
        }});
    }
    else{
        products = await Product.find();
    }
    
    if(products){
        res.status(200).json(products);
    }
    else{
        res.status(404).json("No Product Founds");
    }
});

//@desc created product
//@route post /api/products
//@access public

const createProduct = asyncHandler(async(req, res) => {
    const {title, desc, img, categories, size, color, price } = req.body;
    if(!title || !desc || !price){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const product = await Product.create({
        title,
        desc,
        img,
        categories,
        size,
        color,
        price,
        user_id:req.user.id,
    });

    res.status(201).json(product);
});

//@desc get single product
//@route get /api/products/:id
//@access public

const getProduct = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        res.status(404);
        throw new Error("No Products Found");
    }
    res.status(200).json(product);
});

//@desc update product
//@route put /api/products/:id
//@access public

const updateProduct = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        res.status(404);
        throw new Error("No Products Found");
    }

    if(product.user_id.toString() !== req.user.id)
    {
        res.status(403);
        throw new Error("You are not authorized to update this contact");
    }

    const updatedproduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatedproduct);
});

//@desc delete product
//@route delete /api/products/:id
//@access public

const deleteProduct = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        res.status(404);
        throw new Error("No Products Found");
    }

    await product.deleteOne()
    res.status(200).json(product);
});

module.exports = {getAllProduct, createProduct, getProduct, updateProduct, deleteProduct}