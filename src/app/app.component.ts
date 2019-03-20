import { Component } from '@angular/core';
import { ApplicationStarted } from './actions/app.actions';
import { Store } from '@ngrx/store';
import { State } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(store: Store<State>) {
    store.dispatch(new ApplicationStarted());
  }
}
