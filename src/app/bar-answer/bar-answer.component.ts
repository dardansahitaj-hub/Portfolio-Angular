import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AnswerBarService } from '../service/answer-bar.service';
@Component({
  selector: 'app-bar-answer',
  templateUrl: './bar-answer.component.html',
  styleUrls: ['./bar-answer.component.css']
})
export class BarAnswerComponent implements OnInit {
  answerBar = {
    'server': {
      'resultat': '',
      'reponseValue': ''
    }
  };
  questionAnswer = {
    'oui': 'quoi oui?',
    'non': 'quoi non ?'
  }

  questionAsk = [];
  constructor() {
  }

  ngOnInit(): void {
    this.answerBar.server.reponseValue = "teeeest"
  }



  onEnter(value: string) {

    const valueEnter = value;

    console.log(Object.entries(this.questionAnswer));
    if (value === "oui") {

      this.answerBar.server.reponseValue = "Je vous écoute!"
      value = ''
    }
    else if (value === "test" || value === "oui") {
      this.answerBar.server.reponseValue = "teest"
    }

    else {
      this.answerBar.server.reponseValue = "Vous restez la bienvenue ! "
    }

  }


  getQuestionClient() {

  }


}
