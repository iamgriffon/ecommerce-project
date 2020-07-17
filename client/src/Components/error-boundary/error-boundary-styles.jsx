import styled from 'styled-components';

export const ErrorImageOverlay = styled.div`
  height:70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    height: 85vh;
  }
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;

  
`;

export const ErrorImageTextTitle = styled.h2`
  font-size: 28px;
  color: #2f8e89;
`;

export const ErrorImageText = styled.p`
  font-size: 20px;
  color: #2f8e89;
`;
