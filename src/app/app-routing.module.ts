import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { SingleAnnonceComponent } from './single-annonce/single-annonce.component';

const routes: Routes = [
  {path: '', component:AccueilComponent},
  {path: 'annonce/:id', component: SingleAnnonceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
