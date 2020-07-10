import React from 'react';
import {connect} from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart-selectors';
import {toggleCartHidden} from '../../redux/cart/cart-actions';
import CartItem from '../cart-item/cart-item.component';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {CartDropdownContainer, CartItemContainer, CartButton, CartEmptyMessage} from './cart-dropdown-styles'

const CartDropdown = ({cartItems, history, dispatch}) => {
    
    return(
    <CartDropdownContainer>
        <CartItemContainer>
            {
            cartItems.length ? (
            cartItems.map(cartItem => 
                <CartItem  key={cartItem.id} item={cartItem}/>))
            : (<CartEmptyMessage>Your cart is empty</CartEmptyMessage>)
            }
        </CartItemContainer>
        <CartButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
    }}>
        GO TO CHECKOUT</CartButton>
    </CartDropdownContainer>
)}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown))