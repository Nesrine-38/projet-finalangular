import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annonce, Utilisateur } from 'entities';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient) { }
  getAll() {
    return this.http.get<Utilisateur[]>(environment.serverUrl+'/api/utilisateur');
  }

  getutilisateur(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(environment.serverUrl+'/utilisateur/{id}');
  }

  getAnnoncesByUtilisateur(id: number): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(environment.serverUrl+'/utilisateur/{id}/annonces');
  }
}
