import React, { lazy, Suspense } from 'react';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop-selectors';
import { CategoryContainer, CategoryTitle, CategoryItems } from './collection-page-styles';
import Spinner from '../../Components/spinner/spinner-component';


const CollectionItem = lazy(() => import('../../Components/collection-item/collection-item.component'));
const CollectionPage = ({collection}) => {
  
    const {title, items} = collection
    return(
    <CategoryContainer>
      <Suspense fallback={<Spinner />}>
       <CategoryTitle>{title.toUpperCase()}</CategoryTitle>
       <CategoryItems>
           {
            items.map(item => <CollectionItem key={item.id} item={item}/>)
           }
       </CategoryItems>
       </Suspense>
    </CategoryContainer>
) }

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)