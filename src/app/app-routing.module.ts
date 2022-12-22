import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AProposDeMoiComponent } from './pages/a-propos-de-moi/a-propos-de-moi.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormationComponent } from './pages/formation/formation.component';
import { GraphismeComponent } from './pages/graphisme/graphisme.component';
import { MarketingComponent } from './pages/marketing/marketing.component';
import { ProgrammationComponent } from './pages/programmation/programmation.component';

const routes: Routes = [
  { path: 'a-propos-de-moi', component: AProposDeMoiComponent, title: 'Dardan Sahitaj - A propos de moi' },
  { path: 'contact', component: ContactComponent, title: 'Dardan Sahitaj - Contact' },
  { path: 'formation', component: FormationComponent, title: 'Dardan Sahitaj - Formation' },
  { path: 'graphisme', component: GraphismeComponent, title: 'Dardan Sahitaj - Graphisme' },
  { path: 'marketing', component: MarketingComponent, title: 'Dardan Sahitaj - Marketing' },
  { path: 'programmation', component: ProgrammationComponent, title: 'Dardan Sahitaj - Programmation' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
