import React, { useState } from "react";
import './ProductForm.css'

function ProductForm(props){

        const [title , setTitle] = useState('');
        const [date , setDate] = useState('');

       function titleHandler(event){
        setTitle(event.target.value);

        console.log(event.target.value);
       }

       function dateHandler(event){
        setDate(event.target.value);
      }

      function submitHandler(event){
        event.preventDefault();

        const ProductData = {
            title:title,
            date:date
        };

        // console.log(ProductData);
        props.addProd(ProductData);

        setTitle('');
        setDate('');
      }

     

    return (
        <form onSubmit={submitHandler}>
              <div className="new-product__controls">
                   <div className="new-product__control">
                     <label>Title</label>
                     <input type="text" value={title} onChange={titleHandler}/>
                  </div>
     
                  <div className="new-product__control">
                     <label>Date</label>
                     <input type="date" value={date} onChange={dateHandler} min="2023-01-01" max="2023-12-12"/>
                  </div>
     
                  <div className="new_product_button">
                     <button type="submit">Add Product</button>
                  </div>
              </div>
        </form>
    );
}

export default ProductForm;