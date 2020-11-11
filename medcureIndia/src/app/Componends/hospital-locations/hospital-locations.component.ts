import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    this.router.navigate([cityName], {relativeTo: this._activeRoute})
  }

  constructor(private  router: Router, private _activeRoute: ActivatedRoute) { }



  ngOnInit(): void {
  }

}
