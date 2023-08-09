const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    userId:{
        type:String, required :true    
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

const Order = mongoose.model('order',OrderSchema)

module.exports = Order