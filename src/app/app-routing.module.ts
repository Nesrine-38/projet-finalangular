import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { SingleAnnonceComponent } from './single-annonce/single-annonce.component';
import { ListUtilisateurComponent } from './list-utilisateur/list-utilisateur.component';
import { ListEmpruntComponent } from './list-emprunt/list-emprunt.component';
import { UtilisateurAnnonceComponent } from './utilisateur-annonce/utilisateur-annonce.component';

const routes: Routes = [
  {path: '', component:AccueilComponent},
  {path: 'annonce/:id', component: SingleAnnonceComponent},
  {path: 'list-utilisateur', component: ListUtilisateurComponent},
  { path: 'utilisateur/:id', component: UtilisateurAnnonceComponent },
  {path: 'list-emprunt', component:ListEmpruntComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
