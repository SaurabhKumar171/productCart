import React from 'react';
import './Card.css'

import Products from './Products';


function Card(props){
    return (
        <div className='card'>
               
            <Products title={props.items[0].name} date={props.items[0].date}></Products>
            
            <Products title={props.items[1].name} date={props.items[1].date}></Products>
            
            <Products title={props.items[2].name} date={props.items[2].date}></Products>
            
            <Products title={props.items[3].name} date={props.items[3].date}></Products>

        </div>

    );
}

export default Card;