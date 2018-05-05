import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observer2',
  templateUrl: './observer2.component.html',
  styleUrls: ['./observer2.component.css']
})
export class Observer2Component implements OnInit {

  private players: Observable<any>;

  constructor() {
    this.players = this.xyz();
   }

  xyz(): Observable<any> {
    var obj = new Observable(

      observer => {
        setTimeout(function () {
          observer.next({name:'sachin', score:100});
        }, 1000);

        setTimeout(function () {
          observer.next({name:'dravid', score:150})
        }, 3000);
      }
    );

    return obj;
  }

  ngOnInit() {
  }

}
