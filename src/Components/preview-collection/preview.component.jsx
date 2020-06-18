import React from 'react';
import './preview-style.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1>{title.toUpperCase()}</h1>
        <div className='item-preview'>
            {items
            .filter((item, idx) => idx < 4) 
            .map(({id, ...otherCollectionProps })=>(
                <CollectionItem key={id}{...otherCollectionProps}/>
            ))}
        </div>
    </div>
)

export default CollectionPreview;