import styled from 'styled-components';

export const ColletionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`
export const Title = styled.h1`
    font-size: 28px;
    margin-bottom: 25px;
    &: hover {
        color: grey;
        cursor: default
    }
    cursor: pointer;
    max-width: 125px;
`
export const ItemPreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
`