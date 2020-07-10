import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart-actions';
import {CollectionItemContainer, CollectionImage, AddButton, ItemFooter, ItemName, ItemPrice} from './collection-item-style'


const CollectionItem = ({ item, addItem }) => {
    const {name, price, imageUrl} = item
    return(
    <CollectionItemContainer>
        <CollectionImage className='image' imageUrl={imageUrl}/>
            <ItemFooter>
                <ItemName>{name}</ItemName>
                <ItemPrice>R${price}</ItemPrice>
        </ItemFooter>  
        <AddButton inverted onClick={() => addItem(item)}>Add to cart</AddButton>
    </CollectionItemContainer>
)}

const dispatchMapToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, dispatchMapToProps)(CollectionItem);