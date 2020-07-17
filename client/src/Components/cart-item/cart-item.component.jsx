import React from 'react';
import {CartItemContainer, ItemDetails, ItemLabel} from './cart-items-styles'

const CartItem = ({item: {imageUrl, price, quantity, name}}) => (
    <CartItemContainer>
        <img src={imageUrl} alt="Item"/>
        <ItemDetails>
        <ItemLabel>{name}</ItemLabel>
        <ItemLabel>{quantity}x   ${price}</ItemLabel>

        </ItemDetails>
    </CartItemContainer>
)
export default React.memo(CartItem);
