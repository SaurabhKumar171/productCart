import React from 'react';

import './Products.css'

import Itemdate  from './Itemdate';


function Products(props){
    return <div className='product'>
            <Itemdate date={props.date}/> 

            <div className='product-title'>
                 <h1>{props.title}</h1>
            </div>

            butt
    </div>;
}

export default Products;