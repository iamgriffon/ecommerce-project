import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button';

export const SignUpContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;
    font-size: 22px;

    @media screen and (max-width: 800px) {
      width: 50vw;
    }
`
export const SignUpTitle = styled.h2`
    margin: 10px 0;
`
export const SignUpButtons = styled(CustomButton)`
    display: flex;
    justify-content: center;

    
    @media screen and (max-width: 800px) {
      justify-content: center;
      display: grid;
      grid-template-columns: 1fr;
    }
`