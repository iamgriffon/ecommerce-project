import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart-selectors';
import { CheckoutContainer, CheckoutItem, CheckoutHeader, TotalItems } from './checkout-styles';


const CheckoutPage = ({cartItems, total}) => (
    <CheckoutContainer>
        <CheckoutHeader>
            <CheckoutItem>
                <span>Product</span>
            </CheckoutItem>
            <CheckoutItem>
                <span>Description</span>
            </CheckoutItem>
            <CheckoutItem>
                <span>Quantity</span>
            </CheckoutItem>
            <CheckoutItem>
                <span>Price</span>
            </CheckoutItem>
            <CheckoutItem>
                <span>Remove</span>
            </CheckoutItem>
        </CheckoutHeader>
        {cartItems.map(cartItem => cartItem.name)}
        <TotalItems>
            Total = R${total}
        </TotalItems>
    </CheckoutContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps, null)(CheckoutPage)