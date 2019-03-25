

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddedBookItem } from '../../actions/list.actions';
import { State } from '../../reducers';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {

    add(author: HTMLInputElement, title: HTMLInputElement, format: HTMLSelectElement) {

      // Dispatch an action
      this.store.dispatch(new AddedBookItem(author.value, title.value, format.value));
      // item.value = '';
      author.focus();
    }
  }

