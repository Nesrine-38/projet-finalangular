import { Component, OnInit } from '@angular/core';
import { Annonce, Utilisateur } from 'entities';
import { AnnonceService } from '../annonce.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit{
  list:Annonce[] = [];
  utilisateur:Utilisateur;

  constructor(private annonceservice:AnnonceService){}

  ngOnInit(): void {
    this.annonceservice.fetchAll().subscribe(data => this.list = data['hydra:member']);
  }

  toList(annonce:Annonce, utilisateur:Utilisateur) {
    this.annonceservice.add(annonce).subscribe(data => this.list.push(data)
  );
  }

  removeAnnonce(annonce:Annonce) {
    if(annonce.id) {
      this.annonceservice.delete(annonce.id)
      .subscribe(() => this.list = this.list.filter(item => item.id != annonce.id));
    }
  }

}
