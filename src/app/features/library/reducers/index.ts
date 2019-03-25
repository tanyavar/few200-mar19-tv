
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookItem } from '../models';
import * as fromList from './list';

export const featureName = 'booksFeature'; // just adding this as an export - I forgot to show this in your class. You did great.
export interface State {
  list: fromList.State;
}

export const reducers = {
  list: fromList.reducer
};

// selectors

// 1. created a feture selector
const selectFeature = createFeatureSelector<State>(featureName);

// 2. Create selector for each branch
const selectList = createSelector(selectFeature, f => f.list);

// 3. "Helpers"
const { selectAll: selectBookEntities } = fromList.adapter.getSelectors(selectList); // object destructuring

// 4. Selectors for the components
// BookItem[]
export const selectBookItems = createSelector(selectBookEntities, e => e as BookItem[]);

export const selectBookFormats = createSelector(selectList, b => b.types);
