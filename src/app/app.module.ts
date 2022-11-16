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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DudeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
