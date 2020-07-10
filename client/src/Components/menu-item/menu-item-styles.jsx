import styled from 'styled-components';

export const MenuItemContainer = styled.div`
height: ${({ size }) => (size ? '380px' : '240px')};
min-width: 30%;
overflow: hidden;
display: flex;
flex: 1 1 auto;
align-items: center;
justify-content: center;
border: 1px solid black;
margin: 0 7.5px 15px;
font-family: 'Open Sans Condensed';


&:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`
export const BackgroundImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-image: ${({imageUrl}) => `url(${imageUrl})`}
`
export const ContentContainer = styled.div`
    height: 100px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
`
export const ContentTitle = styled.span`
    font-weight: bold;
    margin-bottom: 6px;
    justify-content: space-between;
    text-transform: strong;
    font-size: 22px;
    color: #4a4a4a;
`
export const ContentSubtitle = styled.span`
    font-weight: lighter;
    font-size: 16px;
`