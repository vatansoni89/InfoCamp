import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() msg : string;
  @Input() fruit: any;
  @Output() emitToParent : EventEmitter<string> = new EventEmitter<string>();
  private x: string;

  ngOnInit() {
    console.log('The message is ', this.msg);
  }

  clickChild(){
    this.emitToParent.emit('Hii from child');
  }

}
