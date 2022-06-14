import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContattiComponent } from './contatti/contatti.component';
import { HomeComponent } from './home/home.component';
import { UtenteComponent } from './utenti/utente/utente.component';
import { UtentiComponent } from './utenti/utenti.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'utenti',
    component: UtentiComponent,
    children: [{ path: ':id', component: UtenteComponent }],
  },
  { path: 'contatti', component: ContattiComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
