import React from 'react';
import {connect} from 'react-redux';
import {deleteItem, addItem, removeItem} from '../../redux/cart/cart-actions';
import { CheckoutItemContainer, CheckoutImageContainer, CheckoutItemPrice, CheckoutItemName, CheckoutItemQuantity, RemoveButton } from './checkout-item-styles';


const CheckoutItem = ({cartItem, deleteItem, addItem, removeItem}) => {
    const {name, price, imageUrl, quantity} = cartItem
    return (
    <CheckoutItemContainer>
        <CheckoutImageContainer>
            <img src={imageUrl} alt="item"/>
        </CheckoutImageContainer>
        <CheckoutItemName>{name}</CheckoutItemName>
        <CheckoutItemQuantity>
            <CheckoutItemQuantity as='div' className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</CheckoutItemQuantity>
           <CheckoutItemQuantity className='value'>{quantity}</CheckoutItemQuantity> 
            <CheckoutItemQuantity as='div' className='arrow' onClick={() => addItem(cartItem)}>&#10095;</CheckoutItemQuantity>
        </CheckoutItemQuantity>
        <CheckoutItemPrice>${price}</CheckoutItemPrice>
        <RemoveButton onClick={() => deleteItem(cartItem)}>&#10005;</RemoveButton>

    </CheckoutItemContainer>
)}

const mapDispatchToProps = dispatch => ({
    deleteItem: item => dispatch(deleteItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)