import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private city: any = {}; //Imp

  // private name: string;
  // private pic: string;
  // private population: string;
  // private mair: string;

  private cities : any[] = [];

  addCity(){
    this.cities.push(this.city);
  }
}
