
import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BookItem } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // Add this for performance on array inputs.
})
export class ListComponent implements OnInit {
  @Input() items: BookItem[];
  constructor() { }

  ngOnInit() {
  }

}

