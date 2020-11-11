import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PatientsDataService {


  receivedpatientsLists;
  userSelectedPatient;

  getData = (endPoint) => {
   return this.http.get(`https://medcure-20830.firebaseio.com/${endPoint}.json`)
  }
  selectedPatient = (selectedPatient) => {
    this.userSelectedPatient = selectedPatient
  }

  constructor(private http: HttpClient) { }
}
