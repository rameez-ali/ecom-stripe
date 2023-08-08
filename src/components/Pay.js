import  StripeCheckout from "react-stripe-checkout";
import React,{useState, useEffect} from "react";
import axios from "axios";


const KEY = "pk_test_SXt8FbbMML39oxl7DSe0Hovs";

    const Pay = () => { 

        const [stripeToken, setStripeToken] = useState(null);
        
        const onToken = (token) => {
            console.log(token);
        };

        useEffect(()=>{
            const makeRequest = async () => {
                try{
                    const res = await axios.post(`http://localhost:5000/api/checkout/payment`,{
                        tokenId:stripeToken.id,
                        amount:2000,
                    });
                }
                catch(err){
                    console.log(err)
                }
            };
            stripeToken && makeRequest()
        },[stripeToken]);

        return (
            <div 
              style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                }}
            >
            <StripeCheckout name="myshop" 
            image="https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
            billingAddress
            shippingAddress
            description="Your T Amount is $20"
            amount = {2000}
            token={onToken}
            stripeKey={KEY}
            >
            <button
              style={{
                border: "none",
                width: 120,
                borderRadius: 5,
                padding: "20px",
                fontWeight: "600",
                color: "white",
                backgroundColor: "black",
                coursor:"pointer"
                }}
            >
            Pay Now
            </button>
            </StripeCheckout>     
            </div>

        );
    };


    export default Pay;