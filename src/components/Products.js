import React from 'react';
import { useState } from 'react';

import './Products.css'

import Itemdate  from './Itemdate';



function Products(props){

        const [title , setTitle] =useState(props.title);
       function clickHandler(){
          if(title ==='Popcorn'){
                setTitle('Maggie');
          }
          else{
                setTitle('Popcorn');
          }
        
        console.log('I am clicked');
       }

    return <div className='product'>
            <Itemdate date={props.date}/> 

            <div className='product-title'>
                 <h1>{title}</h1>
            </div>

            <button onClick={clickHandler}>Add to cart</button>
    </div>;
}

export default Products;