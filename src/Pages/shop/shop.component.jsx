import React from 'react';
import CollectionsOverview from '../../Components/collections-overview/collections-overview.component';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import  WithSpinner  from '../../Components/with-spinner/with-spinner-component';
import {firestore, convertCollectionSnaphotToMap} from '../../firebase/firebase.utils';
import {UpdateCollection} from '../../redux/shop/shop-actions';
import {connect} from 'react-redux';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  componentDidMount(){
    const { UpdateCollections } = this.props
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then(snapShot => {
      const collectionsMap = convertCollectionSnaphotToMap(snapShot);
      UpdateCollections(collectionsMap);
      this.setState({loading: false});
    });
  }

  render(){
    const {match} = this.props
    const {loading} = this.state
    return(
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={props => (
          <CollectionsOverviewWithSpinner  isLoading={loading} {...props} />
          )}
        />
        <Route path={`${match.path}/:collectionId`}  render={props => (
          <CollectionPageWithSpinner  isLoading={loading} {...props} />
          )}
        />
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  UpdateCollections: collectionsMap => dispatch(UpdateCollection(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)