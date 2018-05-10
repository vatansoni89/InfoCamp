import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sudo-parent',
  templateUrl: './sudo-parent.component.html',
  styleUrls: ['./sudo-parent.component.css']
})
export class SudoParentComponent implements OnInit {

  constructor() { }

  private fruitCollection: any[] = [
    { name: 'Orange', cost: 50 },
    { name: 'Apple', cost: 500 }
  ];

  ngOnInit() {
  }

  private msgFrmChild: string;

  notify(childMessage: string) {
    this.msgFrmChild = childMessage;
  }

}
