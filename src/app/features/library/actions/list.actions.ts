
import { Action } from '@ngrx/store';
import { BookEntity } from '../reducers/list';

let tempID = 999;
export const ITEM_ADDED = '[books] Item Added';
export class AddedBookItem implements Action {
  readonly type = ITEM_ADDED;
  payload: BookEntity;
  constructor(author: string, title: string, booktype: string) {
    this.payload = {
      id: 'T' + (tempID++),
      author,
      title,
      booktype
    };
  }
}

export type All = AddedBookItem;

