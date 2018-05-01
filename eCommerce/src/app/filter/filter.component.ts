import { Component, OnInit } from '@angular/core';
import { IProduct } from "app/filter/IProduct";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() {

this.filteredProduct = this.products;
this.filterText = 'App';
   }
  
  private _filterText:string;
  private products : IProduct[] = [
    {name:'Apple',age:'100',city:'Kashmir',state:'Jammu'},
    {name:'Orange',age:'200',city:'Nagpue',state:'Maharastra'}
  ];

  private filteredProduct :IProduct[];


  get filterText(){
    return this._filterText;
  }

  set filterText(value:string)
  {
    debugger;
    this._filterText = value;
    var xxx = this.products.filter((x:IProduct) => x.name.toLocaleLowerCase().indexOf(this.filterText.toLocaleLowerCase()) > -1);
    this.filteredProduct = this.filterText ? xxx : this.products;
  }



  ngOnInit() {
  }

}
