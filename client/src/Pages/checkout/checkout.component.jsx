import React, { lazy, Suspense } from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart-selectors';
import { CheckoutPageContainer, CheckoutHeader, HeaderItem, CheckoutTotal, WarningText, CheckoutButton } from './checkout-page-styles';
import Spinner from '../../Components/spinner/spinner-component';

const CheckoutItem = lazy(() => import('../../Components/checkout-item/checkout-item.component'));

const CheckoutPage = ({cartItems, total}) => (
  <Suspense fallback={<Spinner />}>
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
        <CheckoutButton price={total} />
    </CheckoutPageContainer>
  </Suspense>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps, null)(CheckoutPage)