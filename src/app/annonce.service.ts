import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiList,Annonce } from 'entities';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http: HttpClient) { }

  fetchAll() {
    return this.http.get<ApiList<Annonce>>(environment.serverUrl+'/api/annonces');
  }

  fetchOne(id: number) {
    return this.http.get<Annonce>(environment.serverUrl + '/api/annonces/' + id);
  }

  add(annonce: Annonce) {
    return this.http.post<Annonce>(environment.serverUrl + '/api/annonces', annonce);
  }

  delete(id:number) {
    return this.http.delete(environment.serverUrl + '/api/annonces/' + id);
  }

  update(id: number, annonce: Annonce) {
    return this.http.put<Annonce>(environment.serverUrl + '/api/annonces/' + id, annonce);
  }
}
