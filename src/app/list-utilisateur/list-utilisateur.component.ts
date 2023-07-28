import { Component } from '@angular/core';
import { Utilisateur } from 'entities';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.component.html',
  styleUrls: ['./list-utilisateur.component.css']
})
export class ListUtilisateurComponent {
  list:Utilisateur[] = []
  displayedColumns = ['id', 'nom', 'adresse','email','password', 'role'];
  constructor(private utilisateurService:UtilisateurService){}

  ngOnInit(): void {
    this.utilisateurService.getAll().subscribe(data => this.list = data);
  }
  
}
