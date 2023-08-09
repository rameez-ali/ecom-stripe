const asyncHandler = require('express-async-handler');
const stripe = require("stripe")(process.env.STRIPE_KEY);


//@desc created payment
//@route post /api/stripe
//@access public

const payment = asyncHandler(async(req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
    },(stripeErr, stripeRes) =>{
        if(stripeErr){
            res.status(500).json(stripeErr);
        }
        else{
            res.status(201).json(stripeRes);
        }
    });

});

module.exports = {payment}