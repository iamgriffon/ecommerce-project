import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart-selectors';
import CheckoutItem from '../../Components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../Components/stripe-button/stripe-button.component';
import { CheckoutPageContainer, CheckoutHeader, HeaderItem, CheckoutTotal, WarningText } from './checkout-page-styles';


const CheckoutPage = ({cartItems, total}) => (
    <CheckoutPageContainer>
        <CheckoutHeader>
            <HeaderItem>
                <span>Product</span>
            </HeaderItem>
            <HeaderItem>
                <span>Description</span>
            </HeaderItem>
            <HeaderItem>
                <span>Quantity</span>
            </HeaderItem>
            <HeaderItem>
                <span>Price</span>
            </HeaderItem>
            <HeaderItem>
                <span>Remove</span>
            </HeaderItem>
        </CheckoutHeader>
        {cartItems.map(cartItem => 
         <CheckoutItem 
         key={cartItem.id}
         cartItem={cartItem}/>)}

        <CheckoutTotal>
            Total: R${total}
        </CheckoutTotal>
        <WarningText>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
        </WarningText>
            <br />
        <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps, null)(CheckoutPage)