import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    position: static;

    @media screen and (max-width: 800px) {
      height: 60px;
      padding: 10px;
      margin-bottom: 20px;
    }
`
export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 15px 25px 25px 25px;
    @media screen and (max-width: 800px) {
      width: 50px;
      padding: 0px;
      margin-bottom: 20px;
    }
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 20px;
    @media screen and (max-width: 800px) {
      width: 80%;
      font-size: 14px;
    }
`

export const OptionLink = styled(Link)`
        padding: 10px 15px;
        font-weight: bolder;
        cursor: pointer;
        : hover {
          transform: scale(1.1) 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
          color: blueviolet}
`
