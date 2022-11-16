import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dude',
  templateUrl: './dude.component.html',
  styleUrls: ['./dude.component.css']
})
export class DudeComponent implements OnInit {


  dude = {
    'dudeUrl': "assets/img/dude.png",
    'positionDude': true,
    'classeDude': "dude"
  }
  dashboard = {
    'shrink': true,
    'classe': ''
  }


  constructor() {

  }

  ngOnInit(): void { }

  clickOnDude() {
    this.shrinkDude()
  }
  getClass() {

  }

  shrinkDude() {
    this.dude.classeDude = "dudeMini";
    this.dude.positionDude = false;
  }
  enlargeDude() {
    this.dude.positionDude = true;
  }

  shrinkDashboard() {

  }
  enlargeShrinkDashboard() {

  }
}
