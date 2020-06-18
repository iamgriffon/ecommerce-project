import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size}) => ( //pegando o parametro title e transformando ele dinamicamente.
    <div className={`${size} menu-item`}>
    
       <div
       className='background-image' 
       style={{ backgroundImage: `url(${imageUrl})` }}/> 
       
    <div className='background-'></div>
    <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span><strong>SHOP NOW</strong></span>
        </div>
    </div>
);

export default MenuItem