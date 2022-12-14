import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { DudeComponent } from './dude/dude.component';
import { BodyComponent } from './body/body.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { ChatComponent } from './chat/chat.component';
import { BarAnswerComponent } from './bar-answer/bar-answer.component';
import { FooterComponent } from './footer/footer.component';
import { ProgrammationComponent } from './pages/programmation/programmation.component';
import { MarketingComponent } from './pages/marketing/marketing.component';
import { FormationComponent } from './pages/formation/formation.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AProposDeMoiComponent } from './pages/a-propos-de-moi/a-propos-de-moi.component';
import { GraphismeComponent } from './pages/graphisme/graphisme.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LightgalleryModule } from 'lightgallery/angular';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatMenu } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuLeftComponent,
    DudeComponent,
    BodyComponent,
    CarrouselComponent,
    ChatComponent,
    BarAnswerComponent,
    FooterComponent,
    ProgrammationComponent,
    MarketingComponent,
    FormationComponent,
    ContactComponent,
    AProposDeMoiComponent,
    GraphismeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    LightgalleryModule,
    NgxTypedJsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [DudeComponent,
    ContactComponent,
    BarAnswerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
