
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddedTodoItem } from '../../actions/list.actions';
import { State } from '../../reducers';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }
  add(item: HTMLInputElement) {
    // Dispatch an action
    this.store.dispatch(new AddedTodoItem(item.value));
    item.value = '';
    item.focus();
  }
}

