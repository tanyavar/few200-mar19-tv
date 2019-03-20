
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { reducers } from './reducers';
import { TodolistComponent } from './todolist.component';

@NgModule({
  declarations: [TodolistComponent, ListComponent, EntryComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('todosFeature', reducers)
  ],
  exports: [TodolistComponent]
})
export class TodolistModule { }

