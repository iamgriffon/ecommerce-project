import styled from 'styled-components'

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const CategoryTitle = styled.h2`
font-size: 38px;
margin: 0 auto 30px;
text-align: left;
`
export const CategoryItems = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    & .collection-item  {
        margin-bottom: 30px;
    }
`