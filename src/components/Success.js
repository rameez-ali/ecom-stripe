import React,{useState, useEffect} from "react";
import { useNavigate,useParams } from "react-router-dom";

const UpdateProduct=()=>{
    const [name,setName]=React.useState("");
    const [price,setPrice]=React.useState("");
    const [brand,setBrand]=React.useState("");
    const navigate=useNavigate();
    const params = useParams();

    useEffect(()=>{
        console.log(params);
        getProductDetails();
    },[])

    const getProductDetails=async ()=>{
        let result = await fetch(`http://localhost:5000/product/edit/${params.id}`,{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            },
        });
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setBrand(result.brand);

    }

    const updateProduct=async ()=>{
        
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        
        let result = await fetch(`http://localhost:5000/product/update/${params.id}`,{
            method:'put',
            body:JSON.stringify({name,price,brand,userId}),
            headers:{
                'Content-Type':'application/json',
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            },
            
        })
        result = await result.json();
        console.log(result);
        navigate('/')
        
    }

    return(
        <div className="register">
            <h3>Update Product</h3>
            <input className="inputBox" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Product Name"/>
            <input className="inputBox" value={price} onChange={(e)=>setPrice(e.target.value)} type="text" placeholder="Enter Product Price"/>
            <input className="inputBox" value={brand} onChange={(e)=>setBrand(e.target.value)} type="text" placeholder="Enter Brand Name"/>
            <button onClick={updateProduct} type="submit" className="button">Save</button>
        </div>

    )
}

export default UpdateProduct;