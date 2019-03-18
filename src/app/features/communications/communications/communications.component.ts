import { Component, OnInit } from '@angular/core';

import { ListItem } from '../models';

@Component({
  selector: 'app-communications',
  templateUrl: './communications.component.html',
  styleUrls: ['./communications.component.css']
})
export class CommunicationsComponent implements OnInit {

  todoItems: ListItem[] = [
    { id: '1', description: 'Rake Leaves', completed: false },
    { id: '2', description: 'Wash Siding', completed: true }
  ];


  constructor() { }

  ngOnInit() {
  }
  onItemAdded(what: string) {
    console.log(`the perent got a ${what}`);
  }

}
