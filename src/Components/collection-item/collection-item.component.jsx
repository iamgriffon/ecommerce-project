import React from 'react';
import './collection.item-style.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className='collection-item'>
        <div className='image' 
        style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className='item-footer'>
                <span className='name'>{name}</span>
                <span className='price'>R${price}</span>
        </div>  
    </div>
)

export default CollectionItem;