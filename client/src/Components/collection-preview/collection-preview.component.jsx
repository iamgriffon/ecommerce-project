import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import { Title, ColletionPreviewContainer, ItemPreviewContainer } from './collection-preview-styles';

const CollectionPreview = ({title, items}) => (
    <ColletionPreviewContainer>
        <Title>{title.toUpperCase()}</Title>
        <ItemPreviewContainer>
            {items
            .filter((item, idx) => idx < 4) 
            .map(item => (
                <CollectionItem 
                key={item.id}
                item={item}
                />
            ))}
        </ItemPreviewContainer>
    </ColletionPreviewContainer>
)

export default CollectionPreview;