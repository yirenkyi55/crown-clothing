import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';
import {
  selectIsCollectionFetching,
  selectIsCollectionLoading,
} from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

//match, location, history is automaitcally passed in as props from Route in App.js

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  // componentDidMount() {
  //   const collectionRef = firestore.collection('collections');
  //   const { updateCollections } = this.props;

  //   collectionRef.onSnapshot(async (snapshot) => {
  //     const collectionMap = convertCollectionsSnapshotToMap(snapshot);
  //     updateCollections(collectionMap);
  //     this.setState({ loading: false });
  //   });
  // }

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props;

    return (
      <div className='shop-page'>
        <Route
          path={`${match.path}`}
          exact
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionsPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
