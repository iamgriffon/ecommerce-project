import React from 'react';
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const valueInCents = price*100;
    const publishableKey = 'pk_test_51GyRCeH5HPRIeVKkBWiqfwDVds0twyd3qNkr4tZRPdNGVHVIOMuTHSbkazORKflturlYrOyBtnhDxVbuU6u2fpEw00A43SnMUX';
   const onToken = token => {
      axios({
        url: '/payment',
        method: 'post',
        data: {
          amount: valueInCents,
          token: token
        }
      }).then(response => {
        alert('Payment Succesful!')
      })
      .catch(err => {
        console.log('Payment error: ', err);
        alert('There was an Issue with your credit card, please make to use a valid credit card for Stripe');
      })
    }

    return(
        <StripeCheckout
         name='DUPN STORE'
         label='Pay Now'
         currency='BRL'
         locale='auto'
         billingAddress
         shi
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