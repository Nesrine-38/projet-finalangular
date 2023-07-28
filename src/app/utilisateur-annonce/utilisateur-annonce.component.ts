import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Annonce, Utilisateur } from 'entities';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-utilisateur-annonce',
  templateUrl: './utilisateur-annonce.component.html',
  styleUrls: ['./utilisateur-annonce.component.css']
})
export class UtilisateurAnnonceComponent {
  utilisateur: Utilisateur;
  annonces: Annonce[] = [];

  constructor(
    private route: ActivatedRoute,
    private utilisateurService: UtilisateurService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const utilisateurId = parseInt(params.get('id') || '', 10);
      if (utilisateurId) {
        this.utilisateurAndAnnonces(utilisateurId);
      }
    });
  }

  utilisateurAndAnnonces(id: number) {
    this.utilisateurService.getutilisateur(id).subscribe(
      (utilisateur) => {
        this.utilisateur = utilisateur;
        // Chargez les annonces associées à l'utilisateur
        this.AnnoncesByUser(id);
      });}

  AnnoncesByUser(id: number) {
    this.utilisateurService.getAnnoncesByUtilisateur(id).subscribe(
      (annonces) => {
        this.annonces = annonces;
      });
    }

}
