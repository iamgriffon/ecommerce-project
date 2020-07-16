import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button';

export const SignInContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;
    font-size: 22px;
    @media screen and (max-width: 800px) {
      width: 44vw;
    }
`
export const SignInTitle = styled.h2`
    margin: 10px 0;
`
export const SignInButtons = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 16px;

    @media screen and (max-width: 800px) {
      justify-content: center;
      display: grid;
      grid-template-columns: 1fr;
    }
`
export const Button = styled(CustomButton)`
    justify-content: center
`