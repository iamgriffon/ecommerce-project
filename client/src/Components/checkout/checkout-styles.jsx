import styled from 'styled-components';

export const CheckoutContainer = styled.div`
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
export const CheckoutItem = styled.div`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
        width: 8%;
}
`
export const TotalItems = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`