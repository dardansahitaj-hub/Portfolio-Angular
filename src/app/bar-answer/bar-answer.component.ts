import { HttpClient } from '@angular/common/http';
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
    'demande': '',
    'oui': 'quoi oui?',
    'non': 'quoi non ?'
  }

  Client = {
    'clientInfo': {
      'ipAdress': ''
    }

  }
  questionAsk = {
    'oui': 'quoi oui ?',
    "non": 'quoi non?',
    'bonjour': 'Bonjour, vous allez bien?',
    'date': Date(),
    'ip': this.getIPAddress(),
    'aurevoir': 'Merci de votre venu à bientôt!',
    'base de donnée': 'La base de données est une collection organisée de données connexes où les données sont stockées et organisées pour servir un objectif spécifique.',
    'couleur favori': 'Ma couleur préférer est le vert!',
    'film préférer': 'Mon film préférer est Matrix!',
    'language de programmation préférer': '',
    'sport favori': 'Mon sport favoris est le football',
    'date d\'anniversaire': 'Je suis née le 28 décembre 1994',
    'lieu de n\'aissance': 'Je suis née à Suhareka au Kosovo'
  };



  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.answerBar.server.reponseValue = "Bonjour, je suis la pour répondre à toutes vos questions --->"
    this.getIPAddress();
  }

  getBarranswer() {
    console.log(this.answerBar.server.reponseValue)
    return this.answerBar.server.reponseValue
  }

  onEnter(value: string) {

    console.log("value" + value.toLowerCase())
    const valueEnter = value;
    this.questionAnswer.demande = value;

    if (valueEnter.includes("+")
      || valueEnter.includes("-")
      || valueEnter.includes("*")
      || valueEnter.includes("/")
      || valueEnter.includes("%")
    ) {
      this.answerBar.server.reponseValue = eval(this.questionAnswer.demande)
    }
    else {
      for (const [key, value] of Object.entries(this.questionAsk)) {
        if (valueEnter.toLowerCase().includes(key)) {
          console.log("value enter : " + valueEnter.toLowerCase())
          this.answerBar.server.reponseValue = String(value)
        }

      }

    }

  }

  getIPAddress() {
    this.http.get("http://api.ipify.org/?format=json").subscribe((res: any) => {
      this.questionAsk.ip = res.ip
      this.Client.clientInfo.ipAdress = res.ip
    });
  }

  getDate() {
    return Date;
  }

}
