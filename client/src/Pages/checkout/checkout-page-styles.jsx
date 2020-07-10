import styled from 'styled-components';
import StripeCheckoutButton from '../../Components/stripe-button/stripe-button.component';

export const CheckoutPageContainer = styled.div`
    width: 55%;
    min-width: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
    font-size: 20px;
`
export const CheckoutHeader = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`
export const HeaderItem = styled.div`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
        width: 8%;
    }
` 
export const CheckoutTotal = styled.div`
    argin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`
export const WarningText = styled.div`
    text-align: center;
    margin-top: 40px;
    font-size: 30px;
    color: red
`
export const CheckoutButton = styled(StripeCheckoutButton)`
    margin-left: auto;
    margin-top: 50px;
`