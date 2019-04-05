import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { AddMediacalAidComponent } from './add-mediacal-aid/add-mediacal-aid.component';
import { ViewMediacalAidComponent } from './view-mediacal-aid/view-mediacal-aid.component';
import { AddPatientsComponent } from './add-patients/add-patients.component';
import { ViewPatientsComponent } from './view-patients/view-patients.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { ViewMedicineComponent } from './view-medicine/view-medicine.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { AddHospitalComponent } from './add-hospital/add-hospital.component';
import { ViewHospitalsComponent } from './view-hospitals/view-hospitals.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMediacalAidComponent,
    ViewMediacalAidComponent,
    AddPatientsComponent,
    ViewPatientsComponent,
    AddMedicineComponent,
    ViewMedicineComponent,
    AddDoctorComponent,
    ViewDoctorComponent,
    AddHospitalComponent,
    ViewHospitalsComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
