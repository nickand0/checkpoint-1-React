import React from "react";
import product from "./product";
import './image.css'


const Image =()=>{
    return <img src={product.imageUrl} alt={product.name} className="img" />
}

export default Image