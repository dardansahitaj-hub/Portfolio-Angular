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
  };

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.answerBar.server.reponseValue = "Bonjour"
    this.getIPAddress();
  }

  onEnter(value: string) {

    const valueEnter = value;
    this.questionAnswer.demande = value;

    if (valueEnter.includes("+") || valueEnter.includes("-") || valueEnter.includes("*") || valueEnter.includes("/")) {
      this.answerBar.server.reponseValue = eval(this.questionAnswer.demande)
    }
    else {
      for (const [key, value] of Object.entries(this.questionAsk)) {
        if (valueEnter.includes(key)) {
          this.answerBar.server.reponseValue = String(value)
        }

      }

    }

  }

  doMath() {

  }

  getIPAddress() {
    this.http.get("http://api.ipify.org/?format=json").subscribe((res: any) => {
      console.log(res.ip)
      this.questionAsk.ip = res.ip
      this.answerBar.server.reponseValue = res.ip
    });
  }

  getDate() {
    return Date;
  }

}
