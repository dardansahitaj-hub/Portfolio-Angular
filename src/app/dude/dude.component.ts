import { Component, OnInit } from '@angular/core';
import { BarAnswerComponent } from '../bar-answer/bar-answer.component';

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


  constructor(public BarAnswer: BarAnswerComponent) {

  }

  ngOnInit(): void { }

  clickOnDude() {
    console.log("bonjour")

    console.log(this.BarAnswer.answerBar.server.reponseValue)
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
