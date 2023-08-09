const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const {boolean} = require("webid1-conversions");

const UserSchema = new Schema({
    username:{
        type:String,
        required :[true, "Please Add the Username"]
    },
    email:{
        type:String,
        required :[true, "Please Add the Email Address"]
    },
    password:{
        type:String,
        required :[true, "Please Add the Password"]
    },
    is_admin:{
        type:String,
        default : false,
    },
},
    {
        timestamps:true
    }
);

const User = mongoose.model('user',UserSchema)

module.exports = User