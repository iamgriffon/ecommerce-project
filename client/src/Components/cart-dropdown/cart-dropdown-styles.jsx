import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
`
export const CartEmptyMessage = styled.span`
    justify-content: center;
    font-size: 24px;
    margin: 50px auto;
`
export const CartButton = styled(CustomButton)`
    margin-top: auto;
`
export const CartItemContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`