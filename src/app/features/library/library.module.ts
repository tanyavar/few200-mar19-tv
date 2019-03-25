
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { LibraryComponent } from './library.component';
import { reducers, featureName } from './reducers';

@NgModule({
  declarations: [LibraryComponent, ListComponent, EntryComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers)
  ],
  exports: [
    LibraryComponent
  ]
})
export class LibraryModule { }

