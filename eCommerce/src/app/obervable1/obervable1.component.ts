import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-obervable1',
  templateUrl: './obervable1.component.html',
  styleUrls: ['./obervable1.component.css']
})
export class Obervable1Component implements OnInit {

  constructor() {
    this.xyz().subscribe(
      (res) => { console.log(res) },
      (error) => {console.log(error)}
    );
  }

  ngOnInit() {
  }

  xyz() {
    var obj = new Observable(

      observer => {
        setTimeout(function () {
          observer.next(100);
        }, 1000);

        setTimeout(function () {
          observer.next(200)
        }, 5000);
      }
    );

    return obj;
  }

}
