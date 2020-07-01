import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const valueInCents = price*100;
    const publishableKey = 'pk_test_51GyRCeH5HPRIeVKkBWiqfwDVds0twyd3qNkr4tZRPdNGVHVIOMuTHSbkazORKflturlYrOyBtnhDxVbuU6u2fpEw00A43SnMUX';
   const onToken = token => {
        console.log(token);
        alert('Payment Sucessful!')
    }

    return(
        <StripeCheckout
         name='DUPN STORE'
         ComponentClass='div'
         label='Pay Now'
         currency='BRL'
         locale='br'
         shippingAddress
         billingAddress
         zipCode
         bitcoin
         image='https://raw.githubusercontent.com/iamgriffon/ecommerce-project/master/src/assets/crown.svg'
         description={`Your total is R$${price}`}
         amount={valueInCents}
         panelLabel='Pay now'
         token={onToken}
         stripeKey={publishableKey}
         />
    )
}

export default StripeCheckoutButton