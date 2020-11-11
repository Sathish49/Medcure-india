import { Component, OnInit } from '@angular/core';
import { PatientsDataService} from '../../../patients-data.service'

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  receivedSelectedPatient;

  constructor(private PatientsDataService: PatientsDataService) { }

  ngOnInit(): void {
    this.receivedSelectedPatient =  this.PatientsDataService.userSelectedPatient
  }

}
