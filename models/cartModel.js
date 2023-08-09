const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CartSchema = new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required :[true, "Please Add the Product Name"],
    },
    products:[
        {
            productId:{
                type:String,
            },
            quantity:{
                type:Number,
                default:1,
            },
        },
    ],
    amount:{
        type:Number,
        required :[true, "Please Add the Amount"]
    },
    address:{
        type:Object,
        required :[true, "Please Add the Address"]
    },
    status:{
        type:String,
        default : "Pending"
    },
},
{
    timestamps:true
}
);

const Cart = mongoose.model('cart',CartSchema)

module.exports = Cart