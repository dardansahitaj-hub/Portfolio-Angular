import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bar-answer',
  templateUrl: './bar-answer.component.html',
  styleUrls: ['./bar-answer.component.css']
})
export class BarAnswerComponent implements OnInit {

  @Input() boiteDeDialogueEnvoi = ""

  constructor() {
  }

  ngOnInit(): void {

  }


  onEnter(value: string) {
    if (value === "oui") {
      this.answerBar.server.reponseValue = "Je vous écoute!"
      value = ''

      if (value === "test") {
        this.answerBar.server.reponseValue = "teest"
      }
    }
    else {
      this.answerBar.server.reponseValue = "Vous restez la bienvenue ! "
    }

  }





  answerDude() {
    console.log(this.boiteDeDialogueEnvoi)
    return this.answerBar.server.resultat;
  }

  getQuestionClient() {

  }


}
