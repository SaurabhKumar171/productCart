import React from 'react';

import './Itemdate.css'

function Itemdate(props){

   const month = props.date.toLocaleString('en-US', {month :'long'});
   const day = props.date.toLocaleString('en-US', {day :'2-digit'});
   const year = props.date.getFullYear();


  return (
         <div className='item-date'>
            <div  className='product-month'>{month}</div>
            <div  className='product-year'>{year}</div>
            <div  className='product-day'>{day}</div>
           
         </div>
    );
}

export default Itemdate;