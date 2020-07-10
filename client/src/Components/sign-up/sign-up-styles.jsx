import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button';

export const SignUpContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;
    font-size: 22px;
`
export const SignUpTitle = styled.h2`
    margin: 10px 0;
`
export const SignUpButtons = styled(CustomButton)`
    display: flex;
    justify-content: center;
`