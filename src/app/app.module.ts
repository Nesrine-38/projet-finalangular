import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SingleAnnonceComponent } from './single-annonce/single-annonce.component';
import { FormAnnonceComponent } from './form-annonce/form-annonce.component';
import { AnnonceItemComponent } from './annonce-item/annonce-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListUtilisateurComponent } from './list-utilisateur/list-utilisateur.component';
import { UtilisateurAnnonceComponent } from './utilisateur-annonce/utilisateur-annonce.component';
import { FormEmpruntComponent } from './form-emprunt/form-emprunt.component';
import { ListEmpruntComponent } from './list-emprunt/list-emprunt.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    SingleAnnonceComponent,
    FormAnnonceComponent,
    AnnonceItemComponent,
    HeaderComponent,
    FooterComponent,
    ListUtilisateurComponent,
    UtilisateurAnnonceComponent,
    FormEmpruntComponent,
    ListEmpruntComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
