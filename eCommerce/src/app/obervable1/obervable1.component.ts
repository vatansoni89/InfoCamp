import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-obervable1',
  templateUrl: './obervable1.component.html',
  styleUrls: ['./obervable1.component.css']
})
export class Obervable1Component implements OnInit {

  private score: Observable<number>;

  constructor() {
    // this.xyz().subscribe(
    //   (res) => { console.log(res) },
    //   (error) => {console.log(error)}
    // );
    //To show is browser we dont need above lines.
    this.score = this.xyz();
  }

  ngOnInit() {
  }

  xyz(): Observable<number> {
    var obj = new Observable(

      observer => {
        setTimeout(function () {
          observer.next(100);
        }, 1000);

        setTimeout(function () {
          observer.next(200)
        }, 3000);
      }
    );

    return obj;
  }





}




