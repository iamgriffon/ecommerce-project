import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CollectionsOverview from './collections-overview.component';
import { selectLoading } from '../../redux/shop/shop-selectors';
import WithSpinner from '../with-spinner/with-spinner-component';

const mapStateToProps = createStructuredSelector({
  loading: selectLoading
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
