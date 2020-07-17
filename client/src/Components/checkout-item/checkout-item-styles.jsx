import styled, { css } from'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`

export const CheckoutImageContainer = styled.div`
    width: 20%;
    padding-right: 25px;
    img {
        width: 100%;
        height: 100%;
      }
`
export const CheckoutItemStyles = css`
    width: 23%;
    padding-left: 25px;
` 
export const CheckoutItemQuantity = styled.span`
      ${CheckoutItemStyles}
      padding-left: 5px;
      padding-right: 5px;
      display: flex;

      .arrow{
        cursor: pointer;
      }

      .value {
        margin: 0 5px auto;
      }
`
export const RemoveButton = styled.div`
    padding-left: 24px;
    cursor: pointer;
`

export const CheckoutItemName = styled.span`
      ${CheckoutItemStyles}
`
export const CheckoutItemPrice = styled.span`
      ${CheckoutItemStyles}
`
