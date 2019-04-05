import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  viewDoctor: boolean;
  viewPatients: boolean;
  viewMedicalAids: boolean;
  viewMedicine: boolean;
  viewHospitals: boolean;
  viewPayments: boolean;

  constructor() { }

  ngOnInit() {
    this.viewDoctor = true;
    this.viewPatients = false;
    this.viewMedicalAids = false;
    this.viewMedicine = false;
    this.viewHospitals = false;
    this.viewPayments = false;
  }
  patients() {
    this.viewPatients = true;
    this.viewDoctor = false;
    this.viewMedicalAids = false;
    this.viewMedicine = false;
    this.viewHospitals = false;
    this.viewPayments = false;
  }
  doctor() {
    this.viewDoctor = true;
    this.viewPatients = false;
    this.viewMedicalAids = false;
    this.viewMedicine = false;
    this.viewHospitals = false;
    this.viewPayments = false;
  }
  medicalAids() {
    this.viewMedicalAids = false;
    this.viewPatients = false;
    this.viewDoctor = false;
    this.viewMedicalAids = true;
    this.viewMedicine = false;
    this.viewHospitals = false;
    this.viewPayments = false;
  }
  medicine() {
    this.viewMedicine = false;
    this.viewPatients = false;
    this.viewDoctor = false;
    this.viewMedicalAids = false;
    this.viewMedicine = true;
    this.viewHospitals = false;
    this.viewPayments = false;
  }
  hospitals() {
    this.viewHospitals = false;
    this.viewPatients = false;
    this.viewDoctor = false;
    this.viewMedicalAids = false;
    this.viewMedicine = false;
    this.viewHospitals = true;
    this.viewPayments = false;
  }
  payments() {
    this.viewPayments = false;
    this.viewPatients = false;
    this.viewDoctor = false;
    this.viewMedicalAids = false;
    this.viewMedicine = false;
    this.viewHospitals = false;
    this.viewPayments = true;
  }

}
