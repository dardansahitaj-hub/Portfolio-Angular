import { Component, Input, OnInit } from '@angular/core';
import { DudeComponent } from 'src/app/dude/dude.component'

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.css']
})
export class MenuLeftComponent implements OnInit {

  petitCroix: any = "assets/img/icon/bouton-moins.png";


  constructor(public dude: DudeComponent) {


  }

  ngOnInit(): void {
  }



}
