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
  { path: 'a-propos-de-moi', component: AProposDeMoiComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'graphisme', component: GraphismeComponent },
  { path: 'marketing', component: MarketingComponent },
  { path: 'programmation', component: ProgrammationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
