import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PatientsDataService} from '../../../hospital-locations/patients-data.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-lists',
  templateUrl: './patient-lists.component.html',
  styleUrls: ['./patient-lists.component.css']
})
export class PatientListsComponent implements OnInit {

  receivedpatientsLists:any;
  endPointName;
  constructor(private http: HttpClient, private PatientsDataService: PatientsDataService, private activeRoute: ActivatedRoute) { }
 

  showPatientDetails = (selectedPatient) => {
   this.PatientsDataService.selectedPatient(selectedPatient)
  }
  getPatientsLists = () => {
    let city = this.activeRoute.snapshot.paramMap.get("city")
    if(city === "Hyderabad"){
      this.endPointName = "patientsLists"
    }else if(city === "Chennai"){
      this.endPointName = "chennaiPatientsLists"
    }else if(city === "Bangalore"){
      this.endPointName = "KannadaPatientsLists"
    }
    this.PatientsDataService.getData(this.endPointName)
  }

  ngOnInit(): void {
    // this.PatientsDataService.getData().subscribe(data => {
    //   this.receivedpatientsLists = data
    // })
    this.getPatientsLists()

  
  }

}
