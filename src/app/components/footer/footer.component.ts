import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCurrent, State } from 'src/app/reducers';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footer = '© 2019 Copyright: Tatyana Varenkova';
  count$: Observable<number>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.count$ = this.store.select(selectCurrent);
  }

}
