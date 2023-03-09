import { Component, OnInit } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { LightGallery } from 'lightgallery/lightgallery';

@Component({
  selector: 'app-graphisme',
  templateUrl: './graphisme.component.html',
  styleUrls: ['./graphisme.component.css'],

})
export class GraphismeComponent {


  private lightGallery!: LightGallery;
  private needRefresh = false;
  ngAfterViewChecked(): void {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }
  title = 'angular-demo';
  settings = {
    counter: false,
    plugins: [lgZoom]
  };
  items = [
    {
      id: '1',
      size: '500-500',
      titre: 'Retouche Photo - L\'homme-robot',
      src:
        '/assets/img/projets/graphisme - home robot.jpg',
      thumb:
        '/assets/img/projets/graphisme - home robot.jpg',
      subHtml: `<div class="lightGallery-captions">
            <h4>L'homme robot - Adobe Photoshop</a></h4>
            <p>Published on November 13, 2018</p>
        </div>`
    },
    {
      id: '2',
      size: '1400-933',
      titre: 'Logo - Arm Concept',
      src:
        '/assets/img/projets/logo - arm concept.jpg',
      thumb:
        '/assets/img/projets/logo - arm concept.jpg',
      subHtml: `<div class="lightGallery-captions">
            <h4>Photo by <a href="https://unsplash.com/@kylepyt">Kyle Peyton</a></h4>
            <p>Published on September 14, 2016</p>
        </div>`
    },
    {
      id: '3',
      size: '1400-932',
      titre: 'Logo - Jacothec',
      src:
        '/assets/img/projets/logo - jacothec.png',
      thumb:
        '/assets/img/projets/logo - jacothec.png',
      subHtml: `<div class="lightGallery-captions">
            <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
            <p>Published on May 8, 2020</p>
        </div>`
    },
    {
      id: '4',
      size: '1400-932',
      titre: 'Logo - Jessica Couture',
      src:
        '/assets/img/projets/logo - Jessica couture sans background.png',
      thumb:
        '/assets/img/projets/logo - Jessica couture sans background.png',
      subHtml: `<div class="lightGallery-captions">
            <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
            <p>Published on May 8, 2020</p>
        </div>`
    },
    {
      id: '3',
      size: '1400-932',
      titre: 'Retouche Photo - Le Paingouin Patineur',
      src:
        '/assets/img/projets/pingouin.jpg',
      thumb:
        '/assets/img/projets/pingouin.jpg',
      subHtml: `<div class="lightGallery-captions">
            <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
            <p>Published on May 8, 2020</p>
        </div>`
    },
    {
      id: '4',
      size: '1400-932',
      titre: 'Site Web - Belart Expert & Consultant ',
      src:
        '/assets/img/screenshoot - belart.png',
      thumb:
        '/assets/img/projets/screenshoot - belart.png',
      subHtml: `<div class="lightGallery-captions">
            <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
            <p>Published on May 8, 2020</p>
        </div>`
    }
  ];
  onInit = (detail): void => {
    this.lightGallery = detail.instance;
  };
  addImage = () => {
    this.items = [
      ...this.items,
      {
        id: '4',
        size: '1400-933',
        titre: '',
        src:
          'https://images.unsplash.com/photo-1609902726285-00668009f004?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80',
        thumb:
          'https://images.unsplash.com/photo-1609902726285-00668009f004?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80',
        subHtml: `<div class="lightGallery-captions">
            <h4>Photo by <a href="https://unsplash.com/@bruno_adam">Bruno Adam</a></h4>
            <p>Published on January 6, 2021</p>
        </div>`
      }
    ];
    this.needRefresh = true;
  };

}
