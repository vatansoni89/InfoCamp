import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css']
})
export class ECommerceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private name: string;
  private pic: string;
  private cost: string;

  private products: any[] = [];

  addMe() {
    this.products.push({
      name: this.name,
      pic: this.pic,
      cost: this.cost
    });

    this.clear();
  }

  clear()
  {
    this.name="";
    this.pic = "";
    this.cost = "";
  }

}
