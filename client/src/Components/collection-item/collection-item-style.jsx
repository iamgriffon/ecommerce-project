import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button';

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    padding-left: 10px;
    &:hover{
        .image {
          opacity: 0.8;
        }
    
        button {
          opacity: 0.85;
          display: flex;
        }
    }
`

export const CollectionImage = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
`

export const AddButton = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    bottom: 55px;
    display: none;
`
export const ItemFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    padding-left: 10px;
    padding-right: 10px;
`

export const ItemPrice = styled.span`
    width: 10%;
    font-weight: bold;
    font-size: 20px;
`

export const ItemName = styled.span`
    width: 90%;
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: 300;
`