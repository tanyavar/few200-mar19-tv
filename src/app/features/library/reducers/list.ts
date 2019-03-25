
// import { Action } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as actions from '../actions/list.actions';

export interface BookEntity {
  id: string;
  author: string;
  title: string;
  booktype: string;
}
export interface State extends EntityState<BookEntity> {
  types: string[];
}

export const adapter = createEntityAdapter<BookEntity>();

const initialState: State = {
  ids: ['1', '2', '3'],
  entities: {
    1: { id: '1', author: 'Aleksej Tolstoj', title: 'Life after Life', booktype: 'Paperback' },
    2: { id: '2', author: 'Michelle Obama', title: 'Becoming', booktype: 'Hardcover' },
    3: { id: '3', author: 'Kristine Fields', title: 'A Lily in the Light', booktype: 'E- Book' }
  },
  types: ['Hardcover', 'E-Book', 'Paperback']
};

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.ITEM_ADDED: {
      return adapter.addOne(action.payload, state);
    }
    default: {
      return state;
    }
  }
}

