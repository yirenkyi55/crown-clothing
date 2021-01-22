import { createSelector } from 'reselect';

const selectDirectory = (state) => state.directoryState;

export const selectDirectorySections = createSelector(
  selectDirectory,
  (directory) => directory.sections
);
