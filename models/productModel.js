const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    title:{
        type:String,
        required :[true, "Please Add the Product Name"],
        unique:true
    },
    desc:{
        type:String,
        required :[true, "Please Add the Product Description"]
    },
    img:{
        type:String,
        required :[true, "Please Add the Image"]
    },
    categories:{
        type:Array,
    },
    size:{
        type:String
    },
    color:{
        type:String
    },
    price:{
        type:Number,
        required :[true, "Please Add the Price"]
    },
},
{
    timestamps:true
}
);

const Product = mongoose.model('product',ProductSchema)

module.exports = Product