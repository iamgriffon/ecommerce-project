import React from 'react';
import CollectionItem from '../../Components/collection-item/collection-item.component'
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop-selectors';
import { CategoryContainer, CategoryTitle, CategoryItems } from './collection-page-styles';

const CollectionPage = ({collection}) => {
  
    const {title, items} = collection
    return(
    <CategoryContainer>
       <CategoryTitle>{title.toUpperCase()}</CategoryTitle>
       <CategoryItems>
           {
            items.map(item => <CollectionItem key={item.id} item={item}/>)
           }
       </CategoryItems>
    </CategoryContainer>
) }

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)