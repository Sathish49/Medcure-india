import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-locations',
  templateUrl: './hospital-locations.component.html',
  styleUrls: ['./hospital-locations.component.css']
})
export class HospitalLocationsComponent implements OnInit {

  locations = [
    {name: "Hyderabad", imageUrl: "../../../assets/Hyderabad.jpg"},
    {name: "Chennai", imageUrl: "../../../assets/Chennai.jpg"},
    {name: "Bangalore", imageUrl: "../../../assets/Bangalore.jpg"},
    {name: "Delhi", imageUrl: "../../../assets/Delhi.jpg"},
    {name: "Kolkata", imageUrl: "../../../assets/Kolkata.jpg"},
    {name: "Ahmadabad", imageUrl: "../../../assets/Ahmadabad.jpg"},
  ]

  navigateToPatientsLists = (index) => {
    let cityName = this.locations[index].name
    this.router.navigate(["/hospitals", cityName, "patientsLists"])
  }

  constructor(private  router: Router) { }



  ngOnInit(): void {
  }

}
