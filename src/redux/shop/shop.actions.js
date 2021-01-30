import shopActionTypes from './shop.types';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionMap) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionStartAsync = () => {
  // redux thunk will be interested in this action
  //  since we return a function instead of a regular object
  return (dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionMap));
      })
      .catch((error) => {
        dispatch(fetchCollectionsFailure(error.message));
      });
  };
};
