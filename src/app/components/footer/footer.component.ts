import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footer = '© 2019 Copyright: Tatyana Varenkova';
  constructor() { }

  ngOnInit() {
  }

}
