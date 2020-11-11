import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-page',
  templateUrl: './body-page.component.html',
  styleUrls: ['./body-page.component.css']
})
export class BodyPageComponent implements OnInit {

  isCloseClicked:boolean = false;
  constructor() { }

  closeCard = () => {
    this.isCloseClicked = true
  }

  ngOnInit(): void {
  }

}
