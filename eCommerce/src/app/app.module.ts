import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { DoctorComponent } from './doctor/doctor.component';
import { CityComponent } from './city/city.component';
import { FilterComponent } from './filter/filter.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    ECommerceComponent,
    DoctorComponent,
    CityComponent,
    FilterComponent,
    FormsComponent,
    ReactiveFormValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
