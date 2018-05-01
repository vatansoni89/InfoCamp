import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  @ViewChild('f') frm : FormGroup;
  save1()
  {
console.log(this.frm.value);

  }

  ngOnInit() {
  }

  click() {
    debugger;
    console.log('Hiiiiiiiiiii');
  }

  save(f: NgForm) {
    console.log(f.value);
  }

}
