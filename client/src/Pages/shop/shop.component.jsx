import React, { useEffect, Suspense, lazy } from 'react';
import {Route} from 'react-router-dom';
import Spinner from '../../Components/spinner/spinner-component';
import {connect} from 'react-redux';
import {fetchCollectionStart} from '../../redux/shop/shop-actions';
import {ShopPageContainer} from './shop.styles';

const CollectionPageContainer = lazy(() => import('../collection/collection-container'));
const CollectionsOverviewContainer = lazy(() => import('../../Components/collections-overview/collections-overview-container'));

const ShopPage = ({fetchCollectionStart, match}) => {
  
 useEffect(() => {
   fetchCollectionStart()
 }, [fetchCollectionStart])


    return(
    <Suspense fallback={<Spinner />}>
      <ShopPageContainer>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
        <Route path={`${match.path}/:collectionId`}component={CollectionPageContainer} />
      </ShopPageContainer>
    </Suspense>
    )
  }

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)