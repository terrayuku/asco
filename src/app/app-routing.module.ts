import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { AddHospitalComponent } from './add-hospital/add-hospital.component';
import { AddPatientsComponent } from './add-patients/add-patients.component';
import { ViewPatientsComponent } from './view-patients/view-patients.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { ViewMedicineComponent } from './view-medicine/view-medicine.component';
import { ViewHospitalsComponent } from './view-hospitals/view-hospitals.component';
import { AddMediacalAidComponent } from './add-mediacal-aid/add-mediacal-aid.component';
import { ViewMediacalAidComponent } from './view-mediacal-aid/view-mediacal-aid.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add/doctor', component: AddDoctorComponent },
  { path: 'view/doctor', component: ViewDoctorComponent },
  { path: 'add/patients', component: AddPatientsComponent },
  { path: 'view/patients', component: ViewPatientsComponent },
  { path: 'add/medicine', component: AddMedicineComponent },
  { path: 'view/medicine', component: ViewMedicineComponent },
  { path: 'add/hospital', component: AddHospitalComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'view/hospital', component: ViewHospitalsComponent },
  { path: 'add/medicalaid', component: AddMediacalAidComponent },
  { path: 'view/medicalaid', component: ViewMediacalAidComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports : [ RouterModule ]
})
export class AppRoutingModule { }
