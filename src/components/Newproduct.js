import React from "react";
import './Newproduct.css'

import ProductForm from './ProductForm'

export default (props) => {   
     
 
    function addProd(productData){
        console.log('This is a new product');

        props.newProd(productData);
    }

    
    return (
    <div className="new-product">
        <ProductForm addProd={addProd}/>
    </div>
);
}

