import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookItem } from './models';
import { selectBookItems, State, selectBookFormats } from './reducers';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  bookList$: Observable<BookItem[]>;
  bookTypes$: Observable<string[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.bookList$ = this.store.select(selectBookItems);
    this.bookTypes$ = this.store.select(selectBookFormats);
  }

}
