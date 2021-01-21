import { createSelector } from 'reselect';

const selectUser = (state) => state.userState;

export const selectCurrentUser = createSelector(
  selectUser,
  (user) => user.currentUser
);
