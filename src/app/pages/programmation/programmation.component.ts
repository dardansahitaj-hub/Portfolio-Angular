import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-programmation',
  templateUrl: './programmation.component.html',
  styleUrls: ['./programmation.component.css']
})
export class ProgrammationComponent implements OnInit, AfterViewInit {

  @ViewChild('testBar')
  testBar!: ElementRef;


  progressBar = {
    'html': {
      'value': '',
      'css': '90%',
      'php': '75%',
      'test': '<div class="barre_progression"></div>'
    }
  }

  constructor(private renderer: Renderer2,
    private elementRef: ElementRef) {
  }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    console.log(this.testBar.nativeElement)
    this.elementRef.nativeElement.style.width = '20px'

  }

}
