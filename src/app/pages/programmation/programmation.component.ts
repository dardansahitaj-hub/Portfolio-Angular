import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { BarProgressionComponent } from 'src/app/components/bar-progression/bar-progression.component';

@Component({
  selector: 'app-programmation',
  templateUrl: './programmation.component.html',
  styleUrls: ['./programmation.component.css']
})
export class ProgrammationComponent implements OnInit, AfterViewInit {

  @ViewChild('testBar')
  testBar!: ElementRef;


  progressBar = {
    'programming': {
      'capacity': {
        'html': '95%',
        'css': '90%',
        'php': '75%',
        'javascript': '70%',
        'angular': '55%',
        'typescript': '60%',
        'python': '25%',
        'wamp': '68%',
        'mysql': '59%',
        'mariadb': '65%',
      },
      'urlProjects': {
        'html': '../projets/'
      }
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
