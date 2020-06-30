import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button';

export const SignInContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;
    font-size: 22px;
`
export const SignInTitle = styled.h2`
    margin: 10px 0;
`
export const SignInButtons = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 16px;
`
export const Button = styled(CustomButton)`
    justify-content: center
`