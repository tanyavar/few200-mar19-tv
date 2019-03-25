
import { Component, Input, OnInit } from '@angular/core';
import { BookItem } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() items: BookItem[];
  constructor() { }

  ngOnInit() {
  }

}

