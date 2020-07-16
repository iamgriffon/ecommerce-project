import styled, {css} from 'styled-components';

const getButtonStyles = props => {
  if(props.isGoogleSignIn) {
      return GoogleSignInStyle;
  }  

  return props.inverted? invertedButtonStyle : buttonStyles;
};

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
      }
`

export const CustomButtonStyles = styled.button`
    min-width: 165px;
    max-width: 200px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bolder;
    cursor: pointer;
    font-size: 10px;
    display: flex;
    justify-content: center;

    ${getButtonStyles}

    @media screen and (max-width: 800px) {
      width: 40px;
      font-size: 10px;
    }
`

export const GoogleSignInStyle = css`
    background-color: #eb3458;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: 1px solid black;
        color: black;
    } 
`

export const invertedButtonStyle = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
    background-color: black;
    color: white;
    border: none;
    }
`



