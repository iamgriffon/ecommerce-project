import React from 'react';
import {withRouter} from 'react-router-dom'
import CollectionItem from '../collection-item/collection-item.component';
import { Title, ColletionPreviewContainer, ItemPreviewContainer } from './collection-preview-styles';

const CollectionPreview = ({title, items, history, match}) => (
    <ColletionPreviewContainer>
        <Title onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)} >{title.toUpperCase()}</Title>
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

export default withRouter(CollectionPreview);