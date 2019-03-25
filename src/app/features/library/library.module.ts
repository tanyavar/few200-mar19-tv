
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { LibraryComponent } from './library.component';
import { reducers } from './reducers';

@NgModule({
  declarations: [LibraryComponent, ListComponent, EntryComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('booksFeature', reducers)
  ],
  exports: [
    LibraryComponent
  ]
})
export class LibraryModule { }

