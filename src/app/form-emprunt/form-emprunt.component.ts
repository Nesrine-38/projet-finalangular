import { Component, Inject, Input, Output , EventEmitter } from '@angular/core';
import { EmpruntService } from '../emprunt.service';
import { Annonce, Emprunt, Utilisateur } from 'entities';

@Component({
  selector: 'app-form-emprunt',
  templateUrl: './form-emprunt.component.html',
  styleUrls: ['./form-emprunt.component.css']
})
export class FormEmpruntComponent {
  @Input({required: true}) annonce: Annonce;
  @Input({required: true}) utilisateur: Utilisateur;
  @Input() emprunt:Emprunt={date_debut:'', date_fin:'',status:'',annonce:'' ,utilisateur: {nom: '',adresse: '',email: '',telephone: '',role: ''}};

  @Output()
  added = new EventEmitter<Emprunt>();

  constructor(private empruntservice: EmpruntService) {}

handleSubmit(){
  this.empruntservice.addEmprunt(this.emprunt).subscribe(data => this.emprunt = data)

}

}
