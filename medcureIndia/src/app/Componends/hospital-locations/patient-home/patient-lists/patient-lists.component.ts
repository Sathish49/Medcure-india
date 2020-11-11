import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PatientsDataService} from '../../../hospital-locations/patients-data.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-lists',
  templateUrl: './patient-lists.component.html',
  styleUrls: ['./patient-lists.component.css']
})
export class PatientListsComponent implements OnInit {

  receivedpatientsLists:any;
  endPointName;
  city;

  constructor(private http: HttpClient, private PatientsDataService: PatientsDataService,
     private activeRoute: ActivatedRoute, private router: Router) { }
 

  showPatientDetails = (selectedPatient) => { 
   this.PatientsDataService.selectedPatient(selectedPatient)
   this.router.navigate([selectedPatient.name],{relativeTo: this.activeRoute})
  }
  getPatientsLists = () => {
    this.city = this.activeRoute.snapshot.paramMap.get("city")
    switch(this.city){
      case "Hyderabad":
        this.endPointName = "patientsLists"
        break
      case "Chennai":
        this.endPointName = "chennaiPatientsLists"
        break
      case "Bangalore":
        this.endPointName = "KannadaPatientsLists"
        break
      default:
        this.endPointName = "patientsLists"
        break
    }
  }

  ngOnInit(): void {

    this.getPatientsLists()
    this.PatientsDataService.getData(this.endPointName).subscribe(data => {
      this.receivedpatientsLists = data
    })
  
  }

}
