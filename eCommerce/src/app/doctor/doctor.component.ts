import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }

private name:string;
private mobile:string;
private specialization:string;
private pic:string;
private doctors:any[]=[];
addDoctor(){
this.doctors.push({
  name:this.name,
  mobile:this.mobile,
  specialization: this.specialization,
  pic:this.pic
});
this.cleardoctor();
}

removeDoc(index)
{
  this.doctors.splice(index,1);
}

cleardoctor()
{
  this.name="";
  this.mobile="";
  this.specialization="";
  this.pic="";
}

}
