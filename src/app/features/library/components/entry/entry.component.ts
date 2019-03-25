

import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddedBookItem } from '../../actions/list.actions';
import { State } from '../../reducers';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Input() formats: string[];
  constructor(private store: Store<State>) { }

  ngOnInit() {
  }
  add(author: HTMLInputElement, title: HTMLInputElement, booktype: HTMLSelectElement) {
    this.store.dispatch(new AddedBookItem(author.value, title.value, booktype.value));
    author.focus();
  }
}

